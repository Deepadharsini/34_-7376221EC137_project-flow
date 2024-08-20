import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login'; // Ensure the filename matches
import SignUp from './components/SignUp'; // Ensure the filename matches
import HomePage from './components/HomePage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
