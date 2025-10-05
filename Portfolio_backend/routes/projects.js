// routes/projects.js
const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.get('/', projectController.getAllProjects);
router.get('/featured', projectController.getFeaturedProjects);
router.post('/', projectController.createProject);

module.exports = router;