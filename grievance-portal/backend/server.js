const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const studentRoutes = require('./routes/studentRoutes');
const nonTeachingFacultyRoutes = require('./routes/nonTeachingFacultyRoutes');
const grievanceRoutes = require('./routes/grievanceRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Connect to MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    setTimeout(connectToMongoDB, 5000); // Retry after 5 seconds
  }
};

connectToMongoDB();

// Routes
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/nonteachingfaculty', nonTeachingFacultyRoutes);
app.use('/api/grievances', grievanceRoutes);

// Fallback route for unknown endpoints
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
