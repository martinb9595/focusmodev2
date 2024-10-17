document.getElementById('startFocus').addEventListener('click', function() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon48.png',
        title: 'Focus Mode Activated',
        message: 'You are now in focus mode!',
        priority: 2
    });
});

document.getElementById('stopFocus').addEventListener('click', function() {
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon48.png',
        title: 'Focus Mode Deactivated',
        message: 'You have exited focus mode.',
        priority: 2
    });
});
