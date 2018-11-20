const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow;
let backgroundWindow;

function createMainWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);
  return win;

}

function createBackgroundWindow() {

  win = new BrowserWindow({ show: false });
  win.loadURL(`file://${__dirname}/background/bg_index.html`);
  return win;

}

app.on('ready', () => {
  mainWindow = createMainWindow();
  backgroundWindow = createBackgroundWindow();
});

// event listener

ipcMain.on('bg_windowload', (event, arg) => {
  console.log(arg) // prints "ping"
 // event.returnValue = 'pong'
})