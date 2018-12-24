const { app, BrowserWindow, ipcMain } = require('electron')
const LocalStore = require('./utils/local_store.js');
const FileOpener = require('./utils/file_opener.js');

let mainWindow;
let backgroundWindow;
let AppStore;
let AppState = {
  status : "loading"
};

function initAppStore(args) {

  // setting up local storage
  if ( args[2] != "" ) {
    AppStore = new LocalStore({ fileName: "MegatronLocalConfig", template: { projects: [] }, configFile: args[2] })
  } else {
    AppStore = new LocalStore({ fileName: "MegatronLocalConfig", template: { projects: [] } })
  }

  console.log( "init", AppStore.initialize() )
  console.log( AppStore.data, AppStore.path )

  if ( AppStore.data.projects.length == 0 ) {
    AppState.status = "project_setup";
  }

}

function createMainWindow (args) {

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

function sendMessageToReact(msg) {
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.send('react_receive', msg)
  });
}

app.on('ready', () => {

  console.log("platform", process.platform)

  initAppStore(process.argv);
  mainWindow = createMainWindow(process.argv);
  backgroundWindow = createBackgroundWindow(process.argv);

  // init react with the right state 
  switch (AppState.status) {
    case "project_setup":
      sendMessageToReact({msg:"project_setup"})
      break;
  }

  sendMessageToReact({msg:"set_state", data:"hello from electron"})

  //fo = new FileOpener();
  //fo.Open('test/files/test.docx', "word")

});


// event listener

ipcMain.on('bg_windowload', (event, arg) => {
  console.log(arg) // prints "ping"
 // event.returnValue = 'pong'
})

ipcMain.on('react_message', (event, arg) => {
  console.log("react", arg)
})

