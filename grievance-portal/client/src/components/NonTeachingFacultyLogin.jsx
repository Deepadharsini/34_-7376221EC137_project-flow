import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bannari from '../assets/bannari.jpg'; // Adjust the path if needed

function NonTeachingFacultyLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
   
    const emailRegex = /^[^\s@]+@bitsathy\.ac\.in$/;

    if (!emailRegex.test(email)) {
      setError('Please enter a valid @bitsathy.ac.in email address.');
      return;
    }
    
    setError('');
    // Handle successful login (simulate or perform actual login process)
    navigate('/home');
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${bannari})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md" style={{opacity: 0.7}}>
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
          {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Do not have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NonTeachingFacultyLogin;
