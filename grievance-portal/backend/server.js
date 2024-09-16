const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const facultyRoutes = require('./routes/facultyRoutes');
const studentRoutes = require('./routes/studentRoutes');
const nonTeachingFacultyRoutes = require('./routes/nonTeachingFacultyRoutes'); 
// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas using environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  });

// Routes
app.use('/api/user', userRoutes); // Sign-up for all roles
app.use('/api/admin', adminRoutes); // Admin login
app.use('/api/faculty', facultyRoutes); // Faculty login
app.use('/api/student', studentRoutes); // Student login
app.use('/api/nonteachingfaculty', nonTeachingFacultyRoutes); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
