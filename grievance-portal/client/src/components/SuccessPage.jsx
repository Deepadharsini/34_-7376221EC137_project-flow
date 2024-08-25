//import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="text-center p-8 bg-white shadow-lg rounded-lg">
                <div className="text-6xl text-green-500">✔️</div>
                <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                    Grievance submitted successfully!
                </h1>
                <button 
                    onClick={() => navigate('/home')} 
                    className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default SuccessPage;
