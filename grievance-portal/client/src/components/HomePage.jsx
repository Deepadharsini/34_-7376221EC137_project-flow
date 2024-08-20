const HomePage = () => {
    return (
      <div>
        {/* Navbar */}
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-700">Grify</div>
          <div className="text-gray-700">Hello, User</div>
        </div>
  
        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-4 p-4">
          {/* Public Grievances */}
          <div className="flex-grow">
            <h2 className="text-xl font-semibold mb-4">Public Grievances</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Replace with dynamic data */}
              <div className="p-4 bg-white shadow-md rounded-lg">Grievance #1</div>
              <div className="p-4 bg-white shadow-md rounded-lg">Grievance #2</div>
            </div>
          </div>
  
          {/* Sidebar Menu and Resolved Grievances */}
          <div className="flex flex-col justify-between">
            {/* Menu */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <ul className="space-y-4">
                <li className="text-blue-600 cursor-pointer hover:underline">Submit Grievance</li>
                <li className="text-blue-600 cursor-pointer hover:underline">History</li>
              </ul>
            </div>
  
            {/* Resolved Grievances */}
            <div className="bg-white shadow-md p-4 rounded-lg mt-4">
              <h2 className="text-xl font-semibold">Resolved Grievances</h2>
              {/* Replace with dynamic data */}
              <div className="mt-2">Resolved Grievance #1</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  