import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Import Navbar component

const HomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleLogout = () => {
    // Perform any logout operations here (e.g., clearing authentication tokens)
    
    navigate('/'); // Navigate to the login page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4 p-4 container mx-auto">
        {/* Public Grievances */}
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Public Grievances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Replace with dynamic data */}
            <div className="p-4 bg-white shadow-md rounded-lg">Grievance #1</div>
            <div className="p-4 bg-white shadow-md rounded-lg">Grievance #2</div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <div className="md:w-1/4">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Menu</h3>
            <ul className="space-y-4">
              <li className="text-blue-600 cursor-pointer hover:underline">Profile</li>
              <li className="text-blue-600 cursor-pointer hover:underline">Submit Grievance</li>
              <li className="text-blue-600 cursor-pointer hover:underline">History</li>
              <li className="text-blue-600 cursor-pointer hover:underline">Upvotes History</li>
            </ul>
            <div className="mt-6">
              <button
                onClick={handleLogout} // Add onClick event to handle logout
                className="w-full text-white bg-blue-700 hover:bg-blue-500 py-2 rounded-lg transition duration-300"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Resolved Grievances */}
          <div className="bg-white shadow-md p-4 rounded-lg mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Resolved Grievances</h2>
            {/* Replace with dynamic data */}
            <div className="mt-2">Resolved Grievance #1</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
