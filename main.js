const { app, BrowserWindow, ipcMain } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('./build/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('get-file-list', (event) => {
    // get list of files in the current directory
    const fs = require('fs');
    const path = require('path');
    const directoryPath = path.join(__dirname, './build');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log('Error getting directory information.')
        } else {
            event.reply('file-list', files);
        }
    }
    );
});

ipcMain.on('read-robots-txt', (event) => {
    // read robots.txt
    const fs = require('fs');
    const path = require('path');
    const filePath = path.join(__dirname, './build/robots.txt');
    console.log(filePath);
    fs.readFile(filePath, 'utf8', (err, robotsTxt) => {
        if (err) {
            console.log('Error getting robots.txt.')
        } else {
            event.reply('robots-txt', robotsTxt);
        }
    }
    );
}
);