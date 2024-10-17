import React, { useState } from 'react';

const Popup = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [timer, setTimer] = useState(25); // Default timer for 25 minutes

    const startFocusSession = () => {
        setIsFocused(true);
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Focus Mode Activated',
            message: `You are now in focus mode for ${timer} minutes!`,
            priority: 2
        });
    };

    const stopFocusSession = () => {
        setIsFocused(false);
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'images/icon48.png',
            title: 'Focus Mode Deactivated',
            message: 'You have exited focus mode.',
            priority: 2
        });
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-xl font-bold mb-4">Focus Mode</h1>
            <input
                type="number"
                value={timer}
                onChange={(e) => setTimer(e.target.value)}
                className="border rounded p-2 mb-4"
                placeholder="Set Timer (minutes)"
            />
            <button
                onClick={startFocusSession}
                className="bg-blue-500 text-white p-2 rounded mb-2"
            >
                Start Focus Session
            </button>
            <button
                onClick={stopFocusSession}
                className="bg-red-500 text-white p-2 rounded"
            >
                Stop Focus Session
            </button>
        </div>
    );
};

export default Popup;
