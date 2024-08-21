import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Login />} />
        
        {/* Sign Up Page */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        
        {/* Home Page */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Redirect any other path to Login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
