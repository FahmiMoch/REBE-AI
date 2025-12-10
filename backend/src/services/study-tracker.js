const prisma = require('./prisma');

class StudyTrackerService {
  constructor() {
    this.sessions = new Map(); // Map untuk menyimpan session aktif
  }

  // Mulai tracking study session
  startSession(userId, tutorialId) {
    const sessionId = `${userId}-${tutorialId}`;
    this.sessions.set(sessionId, {
      userId,
      tutorialId,
      startTime: new Date(),
      isActive: true
    });
    
    return sessionId;
  }

  // Akhiri tracking session dan update duration
  async endSession(sessionId) {
    const session = this.sessions.get(sessionId);
    
    if (!session || !session.isActive) {
      return null;
    }

    const endTime = new Date();
    const duration = Math.round((endTime - session.startTime) / (1000 * 60)); // dalam menit

    // Update di completion
    try {
      // Cari completion terkait
      const tutorial = await prisma.developerJourneyTutorial.findUnique({
        where: { id: session.tutorialId },
        select: { developer_journey_id: true }
      });

      if (tutorial) {
        const completion = await prisma.developerJourneyCompletion.findFirst({
          where: {
            user_id: session.userId,
            journey_id: tutorial.developer_journey_id
          }
        });

        if (completion) {
          // Update study duration
          await prisma.developerJourneyCompletion.update({
            where: { id: completion.id },
            data: {
              study_duration: completion.study_duration + duration
            }
          });
        }
      }

      // Hapus session
      this.sessions.delete(sessionId);
      
      return {
        success: true,
        sessionId,
        duration,
        message: `Study session tracked: ${duration} minutes`
      };
    } catch (error) {
      console.error('Error tracking study session:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get active sessions untuk user
  getActiveSessions(userId) {
    const userSessions = [];
    
    for (const [sessionId, session] of this.sessions.entries()) {
      if (session.userId === userId && session.isActive) {
        userSessions.push({
          sessionId,
          tutorialId: session.tutorialId,
          startTime: session.startTime,
          duration: Math.round((new Date() - session.startTime) / (1000 * 60))
        });
      }
    }
    
    return userSessions;
  }
}

module.exports = new StudyTrackerService();