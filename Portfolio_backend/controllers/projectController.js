// controllers/projectController.js
const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getFeaturedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ featured: true });
    res.status(200).json({
      success: true,
      data: projects
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    const savedProject = await project.save();
    res.status(201).json({
      success: true,
      data: savedProject
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};