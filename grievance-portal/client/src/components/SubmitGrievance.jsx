import { useState } from 'react';
import axios from 'axios';

const SubmitGrievance = () => {
    const [type, setType] = useState('public');
    const [content, setContent] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

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
        } catch (error) {
            console.error('Submission failed:', error.response?.data?.message);
            setMessage('Submission failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="public">Public</option>
                <option value="private">Private</option>
            </select>
            <textarea
                placeholder="Enter your grievance"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                Submit anonymously
            </label>
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Grievance'}
            </button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default SubmitGrievance;
