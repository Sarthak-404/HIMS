const { app, BrowserWindow } = require('electron');
const path = require('path');
(async () => {
    const isDev = (await import('electron-is-dev')).default;
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load React app
  win.loadURL(
    isDev
      ? 'http://localhost:3000' // Development: assumes your app runs on localhost:3000
      : `file://${path.join(__dirname, 'build', 'index.html')}` // Production build path
  );

  if (isDev) {
    win.webContents.openDevTools(); // Open DevTools in development mode
  }
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
})();