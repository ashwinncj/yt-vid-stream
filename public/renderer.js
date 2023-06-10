const { ipcRenderer } = require('electron');

function getFiles( setMessage ) {
    // Listen for the 'file-list' event from the main process
    ipcRenderer.on('file-list', (event, fileList) => {
        setMessage(fileList);
    }
    );
    // Request the file-list from the main process
ipcRenderer.send('get-file-list');
}

function readRobotsTxt( setMessage ) {
    // Listen for the 'file-list' event from the main process
    ipcRenderer.on('robots-txt', (event, robotsTxt) => {
        setMessage(robotsTxt);
    }
    );
    // Request the file-list from the main process
ipcRenderer.send('read-robots-txt');
}
