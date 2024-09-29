const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,   // Disable nodeIntegration for security
            contextIsolation: true,   // Enable context isolation
            preload: path.join(__dirname, 'preload.js')  // Preload script for secure Node.js interaction
        }
    });

    win.loadFile('public/index.html');  // Load the renderer content
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
