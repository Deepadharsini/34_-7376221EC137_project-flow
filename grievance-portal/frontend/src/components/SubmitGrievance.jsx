import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SubmitGrievance = () => {
    const [type, setType] = useState('public');
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            const res = await axios.post('/api/grievances', 
                { type, content, isAnonymous }
            );
            console.log('Grievance submitted:', res.data);
            setMessage('Grievance submitted successfully!');
            setType('public');
            setContent('');
            setIsAnonymous(false);
            navigate('/success'); 
        } catch (error) {
            console.error('Submission failed:', error.response?.data?.message);
            setMessage('Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <div className="flex flex-col items-stretch max-w-xl w-full p-6 bg-white rounded-lg shadow-md" style={{opacity: 0.8}}>
                <form 
                    onSubmit={handleSubmit} 
                    className="flex flex-col gap-4 h-full"
                >
                    <select 
                        value={type} 
                        onChange={(e) => setType(e.target.value)}
                        className="p-2 text-lg border border-gray-300 rounded-md bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    >
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                    
                    <textarea
                        placeholder="Enter your grievance"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="p-3 text-lg border border-gray-300 rounded-md bg-gray-50 resize-y min-h-[150px] focus:border-blue-500 focus:ring focus:ring-blue-200"
                    />
                    
                    <label className="flex items-center gap-2 text-base">
                        <input
                            type="checkbox"
                            checked={isAnonymous}
                            onChange={(e) => setIsAnonymous(e.target.checked)}
                            className="accent-blue-500"
                        />
                        Submit anonymously
                    </label>
                    
                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`py-2 px-4 text-lg font-semibold rounded-md transition-colors duration-300 ${
                            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
                        }`}
                    >
                        {loading ? 'Submitting...' : 'Submit Grievance'}
                    </button>
                    
                    {message && <p className="text-center text-red-500">{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default SubmitGrievance;
