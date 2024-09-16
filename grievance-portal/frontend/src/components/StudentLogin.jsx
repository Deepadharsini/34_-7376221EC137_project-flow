import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bannari from '../assets/bannari.jpg';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const studentEmailPattern = /^[a-zA-Z]+\.[a-zA-Z]{2}[0-9]{2}@bitsathy\.ac\.in$/;

    // Debugging statements
    console.log('Email:', email);
    console.log('Password:', password);

    if (!studentEmailPattern.test(email)) {
      console.error('Invalid email format.');
      setError('Invalid email format. It should be name.xx22@bitsathy.ac.in');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/student/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // Debugging statements
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      if (response.ok) {
        // Login successful
        console.log('Login successful.');
        navigate('/home');
      } else {
        // Handle error response
        const data = await response.json();
        console.error('Login error response:', data);
        setError(data.error || 'Invalid email or password');
      }
    } catch (error) {
      // Handle fetch error
      console.error('Fetch error:', error);
      setError('An error occurred during login.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannari})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{ opacity: 0.9 }}>
        <h1 className="text-2xl font-bold mb-6 text-center">Student Login</h1>
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
        </form>
        <p className="text-center mt-4">
          Do not have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default StudentLogin;
