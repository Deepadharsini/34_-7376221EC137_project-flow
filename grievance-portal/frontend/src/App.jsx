import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
    <Router>
      <Routes>
        {/* User Selection Page */}
        <Route path="/" element={<UserSelection />} />

        {/* Login Pages */}
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/faculty-login" element={<FacultyLogin />} />
        <Route path="/non-teaching-faculty-login" element={<NonTeachingFacultyLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Submit Grievance and Success Pages */}
        <Route path="/submit-grievance" element={<SubmitGrievance />} />
        <Route path="/success" element={<SuccessPage />} />

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
