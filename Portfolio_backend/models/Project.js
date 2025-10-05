// models/Project.js
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detailedDescription: String,
  technologies: [String],
  image: String,
  githubUrl: String,
  liveUrl: String,
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'fullstack', 'other'],
    default: 'web',
  },
  achievements: [String]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Project', ProjectSchema);