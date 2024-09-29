// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Expose limited APIs to the renderer process
contextBridge.exposeInMainWorld('electronAPI', {
    onMenuClick: (callback) => ipcRenderer.on('menu-click', callback),
    sendMenuClick: (section) => ipcRenderer.send('menu-click', section)
});
