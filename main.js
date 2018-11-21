const { app, BrowserWindow, ipcMain } = require('electron')
const LocalStore = require('./utils/local_store.js');

let mainWindow;
let backgroundWindow;

function createMainWindow (args) {

  let store;
  if ( args[2] != "" ) {
    store = new LocalStore({ fileName: "MegatronLocalConfig", template: { projects: [] }, configFile: args[2] })
  } else {
    store = new LocalStore({ fileName: "MegatronLocalConfig", template: { projects: [] } })
  }

  console.log( "init", store.initialize() )
  console.log( store.data, store.path )

  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);
  return win;

}

function createBackgroundWindow(args) {

  win = new BrowserWindow({ show: false });
  win.loadURL(`file://${__dirname}/background/bg_index.html`);
  return win;

}

app.on('ready', () => {

  mainWindow = createMainWindow(process.argv);
  backgroundWindow = createBackgroundWindow(process.argv);
});

// event listener

ipcMain.on('bg_windowload', (event, arg) => {
  console.log(arg) // prints "ping"
 // event.returnValue = 'pong'
})