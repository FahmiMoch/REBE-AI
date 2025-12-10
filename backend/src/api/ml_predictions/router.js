const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Generate new prediction
router.post('/predict', controller.generatePrediction);

// Get all predictions
router.get('/', controller.getAllPredictions);

// Get prediction by ID
router.get('/:id', controller.getPredictionById);

// Get predictions by user ID
router.get('/user/:userId', controller.getPredictionsByUser);

// Get latest prediction by user ID
router.get('/user/:userId/latest', controller.getLatestPredictionByUser);

module.exports = router;