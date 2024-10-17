import React, { useState } from 'react';

const FocusSessionPopup = () => {
    const [isActive, setIsActive] = useState(false);
    const [timer, setTimer] = useState(25); // default to 25 minutes
    const [distractions, setDistractions] = useState([]);

    const handleStartStop = () => {
        setIsActive(!isActive);
    };

    const handleTimerChange = (e) => {
        setTimer(e.target.value);
    };

    const handleDistractionChange = (e) => {
        const value = e.target.value;
        setDistractions(prev => 
            prev.includes(value) ? prev.filter(d => d !== value) : [...prev, value]
        );
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-bold mb-4">{isActive ? 'Session Active' : 'Start a Focus Session'}</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Set Timer (minutes):</label>
                    <input 
                        type="number" 
                        value={timer} 
                        onChange={handleTimerChange} 
                        className="border rounded p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Select Distractions to Block:</label>
                    <div>
                        <label className="inline-flex items-center">
                            <input 
                                type="checkbox" 
                                value="social-media" 
                                onChange={handleDistractionChange} 
                                className="form-checkbox"
                            />
                            <span className="ml-2">Social Media</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input 
                                type="checkbox" 
                                value="notifications" 
                                onChange={handleDistractionChange} 
                                className="form-checkbox"
                            />
                            <span className="ml-2">Notifications</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input 
                                type="checkbox" 
                                value="email" 
                                onChange={handleDistractionChange} 
                                className="form-checkbox"
                            />
                            <span className="ml-2">Email</span>
                        </label>
                    </div>
                </div>
                <button 
                    onClick={handleStartStop} 
                    className={`w-full py-2 rounded text-white ${isActive ? 'bg-red-500' : 'bg-green-500'}`}
                >
                    {isActive ? 'Stop Session' : 'Start Session'}
                </button>
            </div>
        </div>
    );
};

export default FocusSessionPopup;
