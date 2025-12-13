const axios = require('axios');
const prisma = require('./prisma');

class MLIntegrationService {
  constructor() {
    this.mlApiUrl = process.env.ML_API_URL || 'https://ml.teamcs222.my.id/predict';
  }

  // ... [collectUserData, calculateMetricsFromRealData, predictLearningStyle tetap sama]

  async generatePrediction(userId, journeyId, additionalData = {}) {
    try {
      console.log(`\n ===== START ML PREDICTION =====`);
      console.log(` User: ${userId},  Journey: ${journeyId}`);
      
      // 1. Kumpulkan data user dari database
      const userData = await this.collectUserData(userId, journeyId);
      
      // 2. Cari exam registration dan result terkait OTOMATIS
      let { examRegistrationId, examResultId } = await this.findRelatedExamData(userId, journeyId);
      
      // Gunakan data dari additionalData jika disediakan
      if (additionalData.examRegistrationId) {
        examRegistrationId = additionalData.examRegistrationId;
      }
      if (additionalData.examResultId) {
        examResultId = additionalData.examResultId;
      }
      
     
      
      // 3. Kirim ke ML API
      const mlResult = await this.predictLearningStyle(userData.metrics);
      
      // 4. Simpan ke database dengan exam data
      console.log(' Saving to MLPredictions table...');
      
      const savedPrediction = await prisma.mLPrediction.create({
        data: {
          user_id: userId,
          journey_id: journeyId,
          completion_id: userData.completionId,
          exam_registration_id: examRegistrationId,  
          exam_result_id: examResultId,              
          
          // Features (diambil dari data real)
          total_active_days: userData.metrics.total_active_days,
          avg_study_duration: userData.metrics.avg_study_duration,
          avg_exam_duration: userData.metrics.avg_exam_duration,
          avg_submission_rating: userData.metrics.avg_submission_rating,
          avg_exam_score: userData.metrics.avg_exam_score,
          
          // Results dari ML API
          gaya_belajar: mlResult.gaya_belajar,
          deskripsi: mlResult.deskripsi,
          saran: mlResult.saran
        }
      });
      
      console.log(`✅ Prediction saved! ID: ${savedPrediction.id}`);
      console.log(` Gaya Belajar: ${savedPrediction.gaya_belajar}`);
      console.log(` Exam Score: ${savedPrediction.avg_exam_score}`);
      console.log(` Exam Registration ID: ${savedPrediction.exam_registration_id}`);
      console.log(` Exam Result ID: ${savedPrediction.exam_result_id}`);
      console.log(`=====================================\n`);
      
      return {
        success: true,
        data: savedPrediction,
        prediction: mlResult
      };
    } catch (error) {
      console.error('❌ Error in generatePrediction:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // ========== FUNGSI BARU: CARI EXAM DATA TERKAIT ==========
  async findRelatedExamData(userId, journeyId) {
    try {
      console.log(` Finding related exam data for user ${userId}, journey ${journeyId}`);
      
      // 1. Cari semua tutorial untuk journey ini
      const tutorials = await prisma.developerJourneyTutorial.findMany({
        where: { developer_journey_id: journeyId },
        select: { id: true, title: true }
      });

      if (tutorials.length === 0) {
        console.log('⚠️ No tutorials found for this journey');
        return { examRegistrationId: null, examResultId: null };
      }

      const tutorialIds = tutorials.map(t => t.id);
      console.log(` Found ${tutorials.length} tutorials:`, tutorialIds);

      // 2. Cari exam registration terbaru untuk user di tutorial-tutorial ini
      const examRegistration = await prisma.examRegistration.findFirst({
        where: { 
          examinees_id: userId,
          tutorial_id: { in: tutorialIds },
          status: 'completed'
        },
        orderBy: { created_at: 'desc' },
        include: { 
          result: true,
          tutorial: true 
        }
      });

      if (!examRegistration) {
        console.log('⚠️ No completed exam registration found');

        const anyExam = await prisma.examRegistration.findFirst({
          where: { 
            examinees_id: userId,
            tutorial_id: { in: tutorialIds }
          },
          orderBy: { created_at: 'desc' },
          include: { result: true }
        });
        
        if (anyExam) {
          console.log(` Found non-completed exam: ${anyExam.id}`);
          return { 
            examRegistrationId: anyExam.id, 
            examResultId: anyExam.result?.id || null 
          };
        }
        
        return { examRegistrationId: null, examResultId: null };
      }

      console.log(`✅ Found exam registration: ${examRegistration.id} for tutorial: ${examRegistration.tutorial.title}`);
      console.log(`✅ Exam result: ${examRegistration.result?.id || 'No result'}`);

      return {
        examRegistrationId: examRegistration.id,
        examResultId: examRegistration.result?.id || null
      };
      
    } catch (error) {
      console.error('❌ Error finding related exam data:', error.message);
      return { examRegistrationId: null, examResultId: null };
    }
  }

  // ========== FUNGSI OPTIONAL: BUAT EXAM DATA JIKA TIDAK ADA ==========
  async createExamDataIfNotExist(userId, journeyId, tutorialId = null) {
    try {
      // Cari atau buat tutorial jika tidak ada
      let tutorial;
      if (tutorialId) {
        tutorial = await prisma.developerJourneyTutorial.findUnique({
          where: { id: tutorialId }
        });
      } else {
        // Ambil tutorial pertama dari journey
        tutorial = await prisma.developerJourneyTutorial.findFirst({
          where: { developer_journey_id: journeyId }
        });
      }

      if (!tutorial) {
        console.log('⚠️ No tutorial found, creating a default one');
        // Buat tutorial default
        tutorial = await prisma.developerJourneyTutorial.create({
          data: {
            developer_journey_id: journeyId,
            title: `Default Tutorial for Journey ${journeyId}`,
            position: 1,
            status: 'published',
            author_id: 1 // Admin user
          }
        });
      }

      // Buat exam registration
      const examRegistration = await prisma.examRegistration.create({
        data: {
          tutorial_id: tutorial.id,
          examinees_id: userId,
          status: 'completed',
          exam_finished_at: new Date()
        }
      });

      // Buat exam result
      const examResult = await prisma.examResult.create({
        data: {
          exam_registration_id: examRegistration.id,
          total_questions: 10,
          score: Math.floor(Math.random() * 30) + 70, // Score 70-100
          is_passed: true,
          created_at: new Date()
        }
      });

      console.log(`✅ Created exam data: Registration ${examRegistration.id}, Result ${examResult.id}`);
      
      return {
        examRegistrationId: examRegistration.id,
        examResultId: examResult.id
      };

    } catch (error) {
      console.error('❌ Error creating exam data:', error.message);
      return { examRegistrationId: null, examResultId: null };
    }
  }
}

module.exports = new MLIntegrationService();