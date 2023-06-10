// Main electron process
// Starts the app and creates a browser window to render HTML

const electron = require('electron');
const { app, BrowserWindow } = electron;
const fs = require('fs');
const { ipcMain } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected
let mainWindow;

function createWindow() {

    // Create the browser window
    mainWindow = new BrowserWindow({ width: 800, height: 600,
    webPreferences:{
        nodeIntegration: true,
        contextIsolation: false,
    } });
    
    // Load the index.html of the app
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    
    // Open the DevTools
    fs.readdir('.', (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
      
        console.log(files);
        
      });
    // Emitted when the window is closed
    mainWindow.on('closed', () => {
    
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element
        mainWindow = null;
    });
    }

// This method will be called when Electron has finished
// initialization and is ready to create browser windows
// Some APIs can only be used after this event occurs
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
    
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
    
            app.quit();
        }
    }
);

app.on('activate', () => {
        
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open
            if (mainWindow === null) {
        
                createWindow();
            }
        }
    );

ipcMain.on('message-from-renderer', (event, message) => {
    console.log(`Received message from renderer: ${message}`);
    event.sender.send('message-from-main', 'Hello from main!');
}
);
