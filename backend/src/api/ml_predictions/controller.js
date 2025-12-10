const mlIntegrationService = require('../../services/ml-integration');
const prisma = require('../../services/prisma');

class MLPredictionsController {
  // Generate prediction untuk user
  async generatePrediction(req, res, next) {
    try {
      const { userId, journeyId } = req.body;
      
      const result = await mlIntegrationService.generatePrediction(userId, journeyId);
      
      if (result.success) {
        
        res.status(200).json({
          status: 'success',
          data: result.data  
        });
      } else {
        res.status(400).json({
          status: 'error',
          message: result.error
        });
      }
    } catch (error) {
      next(error);
    }
  }

  // Get semua predictions 
  async getAllPredictions(req, res, next) {
    try {
      const predictions = await prisma.mLPrediction.findMany({
        
        orderBy: {
          created_at: 'desc'
        }
      });

      res.status(200).json({
        status: 'success',
        data: predictions,  
        count: predictions.length
      });
    } catch (error) {
      next(error);
    }
  }

  // Get prediction by ID 
  async getPredictionById(req, res, next) {
    try {
      const { id } = req.params;
      
      const prediction = await prisma.mLPrediction.findUnique({
        where: { id: parseInt(id) }
       
      });

      if (!prediction) {
        return res.status(404).json({
          status: 'error',
          message: 'Prediction not found'
        });
      }

      res.status(200).json({
        status: 'success',
        data: prediction  
      });
    } catch (error) {
      next(error);
    }
  }

  // Get predictions by user ID 
  async getPredictionsByUser(req, res, next) {
    try {
      const { userId } = req.params;
      
      const predictions = await prisma.mLPrediction.findMany({
        where: { user_id: parseInt(userId) },
     
        orderBy: {
          created_at: 'desc'
        }
      });

      res.status(200).json({
        status: 'success',
        data: predictions,
        count: predictions.length
      });
    } catch (error) {
      next(error);
    }
  }

  // Get latest prediction for a user 
  async getLatestPredictionByUser(req, res, next) {
    try {
      const { userId } = req.params;
      
      const prediction = await prisma.mLPrediction.findFirst({
        where: { user_id: parseInt(userId) },
        
        orderBy: {
          created_at: 'desc'
        }
      });

      if (!prediction) {
        return res.status(404).json({
          status: 'error',
          message: 'No prediction found for this user'
        });
      }

      res.status(200).json({
        status: 'success',
        data: prediction  
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new MLPredictionsController();