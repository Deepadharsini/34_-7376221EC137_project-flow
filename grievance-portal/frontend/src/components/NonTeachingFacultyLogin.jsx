import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannari from '../assets/bannari.jpg';

function NonTeachingFacultyLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login form submitted:', { email, password }); // Debugging
  
    // Validate email format
    if (!validateEmail(email)) {
      setError('Invalid email format. Must be like "name@bitsathy.ac.in".');
      console.log('Email validation failed:', email); // Debugging
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/nonteachingfaculty/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      console.log('Login response received:', response); // Debugging
  
      if (response.ok) {
        const data = await response.json();
        console.log('Login response data:', data); // Debugging
        navigate('/home');
      } else {
        const data = await response.json();
        setError(data.error || 'Login failed. Please try again later.');
        console.error('Login failed:', data.error); // Debugging
      }
    } catch (err) {
      console.error('Fetch error:', err); // Debugging
      setError('Login failed. Please try again later.');
    }
  };
  

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannari})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{ opacity: 0.7 }}>
        <h1 className="text-2xl font-bold mb-6 text-center">Non-Teaching Faculty Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
          <p className="text-center text-gray-600">Do not have an account? <a href="/signup" className="text-blue-600">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
}

export default NonTeachingFacultyLogin;
