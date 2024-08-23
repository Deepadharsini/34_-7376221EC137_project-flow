import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
//import Login from './components/Login';
import HomePage from './components/HomePage';
import StudentLogin from './components/StudentLogin';
import FacultyLogin from './components/FacultyLogin';
import NonTeachingFacultyLogin from './components/NonTeachingFacultyLogin';
import AdminLogin from './components/AdminLogin';
import UserSelection from './components/UserSelection';

function App() {
  return (
    <Router>
      <Routes>
        {/* User Selection Page */}
        <Route path="/" element={<UserSelection />} />

        {/* Login Pages */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/non-teaching-faculty-login" element={<NonTeachingFacultyLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* SignUp Page */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />

        {/* Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
