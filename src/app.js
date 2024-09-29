const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,  // for security reasons
            contextIsolation: true,  // to isolate the context between browser and main processes
            preload: path.join(__dirname, 'preload.js')  // to allow limited, secure access to Node.js
        }
    });

    win.loadFile('public/index.html');  // Load your HTML file
}

app.whenReady().then(createWindow);
