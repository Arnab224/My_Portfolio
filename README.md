Portfolio Project
A full-stack web application showcasing my projects and skills with a modern, interactive frontend and a robust backend API.

🚀 Project Structure
Backend (Portfolio_backend/)
A Node.js/Express server with MongoDB database for handling portfolio data and contact form submissions.

text
Portfolio_backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── contactController.js  # Contact form logic
│   └── projectController.js  # Project data logic
├── middleware/
│   └── errorHandler.js       # Error handling middleware
├── models/
│   ├── Contact.js           # Contact form schema
│   └── Project.js           # Project data schema
├── routes/
│   ├── contact.js           # Contact routes
│   └── projects.js          # Project routes
├── node_modules/
├── .env                     # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── seedProjects.js          # Database seeding script
└── server.js               # Main server file
Frontend (Portfolio_frontend/)
A React application with stunning visual effects and interactive components.

text
Portfolio_frontend/
├── public/
├── src/
│   ├── api/
│   │   └── api.js           # API communication
│   ├── components/
│   │   ├── AtomicParticleText/    # Animated text component
│   │   ├── CosmicCursor.jsx       # Custom cursor effects
│   │   ├── CosmicParticles/       # Particle background effects
│   │   ├── GridOverlay.jsx        # Grid layout component
│   │   ├── MatrixBackground/      # Matrix-style animation
│   │   ├── Navbar.jsx             # Navigation component
│   │   └── RippleEffect.jsx       # Interactive ripple effects
│   ├── data/
│   │   └── projects.js      # Static project data
│   ├── pages/
│   │   ├── Contact.jsx      # Contact page
│   │   ├── Home.jsx         # Home/Landing page
│   │   └── Projects.jsx     # Projects showcase page
│   ├── styles/
│   │   ├── App.css          # Main stylesheet
│   │   └── index.css        # Global styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Application entry point
├── .env
├── .gitignore
├── eslint.config.js
└── index.html
🛠️ Technologies Used
Backend
Node.js - Runtime environment

Express.js - Web framework

MongoDB - Database

Mongoose - ODM for MongoDB

CORS - Cross-origin resource sharing

Environment Variables - Configuration management

Frontend
React - UI library

Vite - Build tool and dev server

Custom CSS - Styling

Interactive Components - Custom visual effects and animations

✨ Features
Visual Effects
Cosmic Cursor - Custom animated cursor

Particle Systems - Dynamic background particles

Matrix Background - Code rain animation

Ripple Effects - Interactive click/touch animations

Atomic Particle Text - Animated typography

Grid Overlay - Modern layout enhancements

Pages & Functionality
Home - Landing page with introduction

Projects - Portfolio project showcase

Contact - Contact form with backend integration

🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

MongoDB (local or cloud instance)

npm or yarn

Backend Setup
Navigate to the backend directory:

bash
cd Portfolio_backend
Install dependencies:

bash
npm install
Create a .env file with your environment variables:

text
MONGODB_URI=your_mongodb_connection_string
PORT=5000
Seed the database (optional):

bash
node seedProjects.js
Start the server:

bash
npm start
Frontend Setup
Navigate to the frontend directory:

bash
cd Portfolio_frontend
Install dependencies:

bash
npm install
Create a .env file for frontend configuration if needed

Start the development server:

bash
npm run dev
📡 API Endpoints
Projects
GET /api/projects - Fetch all projects

GET /api/projects/:id - Fetch single project

POST /api/projects - Create new project (admin)

PUT /api/projects/:id - Update project (admin)

DELETE /api/projects/:id - Delete project (admin)

Contact
POST /api/contact - Submit contact form

🎨 Customization
The portfolio is designed to be easily customizable:

Projects: Update src/data/projects.js or use the backend API

Styling: Modify CSS files in the styles/ directory

Components: Customize interactive components in the components/ directory

Content: Update page components in the pages/ directory

📱 Responsive Design
The application is fully responsive and optimized for:

Desktop computers

Tablets

Mobile devices

🤝 Contributing
Feel free to fork this project and customize it for your own portfolio! If you have suggestions for improvements, please open an issue or submit a pull request.

📄 License
This project is open source and available under the MIT License.