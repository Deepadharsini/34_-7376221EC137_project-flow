import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bannari from '../assets/bannari.jpg';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const studentEmailPattern = /^[a-zA-Z]+\.[a-zA-Z]{2}[0-9]{2}@bitsathy\.ac\.in$/;
    const facultyEmailPattern = /^[a-zA-Z0-9._%+-]+@bitsathy\.ac\.in$/;
    const adminEmail = 'admin@bitsathy.ac.in';

    // Validate email format
    if (!studentEmailPattern.test(email) && !facultyEmailPattern.test(email) && email !== adminEmail) {
      setError('Invalid email format.');
      return;
    }

    try {
      // Send the signup request to the unified endpoint
      const response = await fetch('http://localhost:5000/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.error || 'Sign-up failed. Please try again.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('An error occurred during sign-up.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannari})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{ opacity: 0.9 }}>
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-4">
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
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
