const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project.js");
const { projectsData } = require("../Portfolio_frontend/src/data/projects.js"); // adjust path if needed

dotenv.config();

// 🧠 Your MongoDB connection URL from .env
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/arnab_portfolio";

const importData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    // Remove invalid `_id` fields before insertion
    const cleanedData = projectsData.map(({ _id, ...rest }) => rest);

    await Project.deleteMany();
    await Project.insertMany(cleanedData);

    console.log("✅ Projects imported successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1);
  }
};

importData();