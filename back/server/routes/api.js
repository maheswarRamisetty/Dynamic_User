const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

// User Routes
router.post('/users', userController.createUser);
router.put('/users/availability', userController.addAvailability);
router.get('/users/:email/availability', userController.getUserAvailability);

// Session Routes
router.post('/sessions', sessionController.createSession);
router.get('/sessions', sessionController.getSessions);
router.get('/sessions/:email', sessionController.getUserSessions);

module.exports = router;
