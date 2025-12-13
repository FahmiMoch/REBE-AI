const { PrismaClient } = require('@prisma/client');
const axios = require('axios');

const prisma = new PrismaClient();
const API_BASE = process.env.API_BASE || 'http://localhost:5000/api';

async function autoGenerateForAllCompletions() {
  console.log(' Auto-generating ML predictions for all completions...\n');
  
  try {
    // 1. Test ML API terlebih dahulu
    console.log(' Testing ML API connection...');
    try {
      const testResponse = await axios.post(
        'https://ml.teamcs222.my.id/predict',
        {
          total_active_days: 7,
          avg_study_duration: 60,
          avg_exam_duration: 30,
          avg_submission_rating: 4.2,
          avg_exam_score: 85.5
        },
        { timeout: 10000 }
      );
      console.log(`✅ ML API Test: ${testResponse.data.gaya_belajar}`);
    } catch (mlError) {
      console.error(`❌ ML API Test Failed: ${mlError.message}`);
      console.log('⚠️  Will try to generate predictions anyway...');
    }
    
    // 2. Test backend API
    console.log('\n Testing Backend API...');
    try {
      const backendTest = await axios.get(`${API_BASE}/ml-predictions`, { timeout: 5000 });
      console.log(`✅ Backend API: ${backendTest.status}`);
    } catch (backendError) {
      console.error(`❌ Backend API Failed: ${backendError.message}`);
      console.log(' Make sure server is running: npm start');
      return;
    }
    
    // 3. Ambil semua completions
    console.log('\n Fetching completions from database...');
    const completions = await prisma.developerJourneyCompletion.findMany({
      include: {
        user: { select: { id: true, name: true, email: true } },
        journey: { select: { id: true, name: true } }
      }
    });
    
    console.log(` Found ${completions.length} completions`);
    
    if (completions.length === 0) {
      console.log('❌ No completions found. Run "npm run seed" first.');
      return;
    }
    
    // 4. Cek yang sudah ada prediction
    const existingPredictions = await prisma.mLPrediction.findMany({
      select: { completion_id: true }
    });
    
    const existingCompletionIds = new Set(
      existingPredictions.map(p => p.completion_id).filter(id => id)
    );
    
    // 5. Filter completions yang belum punya prediction
    const completionsWithoutPrediction = completions.filter(
      c => !existingCompletionIds.has(c.id)
    );
    
    console.log(` Need to generate for ${completionsWithoutPrediction.length} completions\n`);
    
    if (completionsWithoutPrediction.length === 0) {
      console.log('✅ All completions already have predictions!');
      return;
    }
    
    // 6. Generate untuk masing-masing dengan better error handling
    let successCount = 0;
    let failCount = 0;
    
    for (const completion of completionsWithoutPrediction.slice(0, 10)) { // Limit 10 dulu
      try {
        console.log(` Generating for: ${completion.user.name} - ${completion.journey.name}`);
        console.log(`   User ID: ${completion.user_id}, Journey ID: ${completion.journey_id}`);
        
        const response = await axios.post(
          `${API_BASE}/ml-predictions/predict`,
          {
            userId: completion.user_id,
            journeyId: completion.journey_id,
            completionId: completion.id
          },
          {
            timeout: 30000, // 30 seconds timeout
            headers: { 'Content-Type': 'application/json' }
          }
        );
        
        if (response.data.status === 'success') {
          console.log(`✅ Success: ${response.data.data.gaya_belajar}`);
          successCount++;
        } else {
          console.log(`❌ API Error: ${response.data.message}`);
          failCount++;
        }
        
      } catch (error) {
        console.error(` Error for ${completion.user.name}:`);
        console.error(`   Message: ${error.message}`);
        
        if (error.response) {
          console.error(`   Status: ${error.response.status}`);
          console.error(`   Data: ${JSON.stringify(error.response.data)}`);
        }
        
        if (error.code === 'ECONNREFUSED') {
          console.error('    Is the server running? Run: npm start');
        }
        
        failCount++;
      }
      
      console.log('---');
      await new Promise(resolve => setTimeout(resolve, 1000)); // Delay 1 detik
    }
    
    // 7. Show final summary
    const finalCount = await prisma.mLPrediction.count();
    console.log('\n📈 ===== GENERATION SUMMARY =====');
    console.log(`✅ Successfully generated: ${successCount}`);
    console.log(`❌ Failed: ${failCount}`);
    console.log(` Total ML Predictions in database: ${finalCount}`);
    
    if (finalCount > 0) {
      const sample = await prisma.mLPrediction.findFirst({
        include: {
          user: { select: { name: true } },
          journey: { select: { name: true } }
        },
        orderBy: { created_at: 'desc' }
      });
      console.log(`\n Latest prediction:`);
      console.log(`   User: ${sample.user.name}`);
      console.log(`   Journey: ${sample.journey.name}`);
      console.log(`   Gaya Belajar: ${sample.gaya_belajar}`);
      console.log(`   Created: ${sample.created_at.toISOString().split('T')[0]}`);
    }
    
    console.log('=================================\n');
    
  } catch (error) {
    console.error('❌ Critical error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Handle command line arguments
const args = process.argv.slice(2);
if (args.includes('--test')) {
  console.log(' Running in test mode...');
}

autoGenerateForAllCompletions();