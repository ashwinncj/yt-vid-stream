// Import IPC Renderer
const { ipcRenderer } = require('electron');

// Send a message to the main process
ipcRenderer.send('message-from-renderer', 'Hello from renderer test!');

// Receive a message from the main process
ipcRenderer.on('message-from-main', (event, message) => {
    console.log(`Received message from main: ${message}`);
    document.body.innerHTML = message;
});
