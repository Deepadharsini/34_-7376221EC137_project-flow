import { Link } from 'react-router-dom';

const UserSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="space-y-4">
          <Link to="/student-login" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Student Login
          </Link>
          <Link to="/faculty-login" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Faculty Login
          </Link>
          <Link to="/non-teaching-faculty-login" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Non-Teaching Faculty Login
          </Link>
          <Link to="/admin-login" className="block bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
