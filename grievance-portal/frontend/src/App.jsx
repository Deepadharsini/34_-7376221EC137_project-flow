// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GrievanceProvider } from './context/GrievanceContext';
import { AuthProvider } from './context/AuthContext';

// Importing Components
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';
import NonTeachingFacultyLogin from './components/NonTeachingFacultyLogin';
import AdminLogin from './components/AdminLogin';
import UserSelection from './components/UserSelection';
import SubmitGrievance from './components/SubmitGrievance';
import SuccessPage from './components/SuccessPage';

function App() {
  return (
    <AuthProvider>
      <GrievanceProvider>
        <Router>
          {/* Navbar is placed here to appear on all pages */}
          
          <Routes>
            {/* User Selection Page */}
            <Route path="/" element={<UserSelection />} />

            {/* Authentication Routes */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/faculty-login" element={<FacultyLogin />} />
            <Route path="/non-teaching-faculty-login" element={<NonTeachingFacultyLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />

            {/* Grievance Management Routes */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/submit-grievance" element={<SubmitGrievance />} />
            <Route path="/success" element={<SuccessPage />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </GrievanceProvider>
    </AuthProvider>
  );
}

export default App;
