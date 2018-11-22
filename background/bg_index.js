const { ipcRenderer } = require('electron');

window.onload = function() {
    ipcRenderer.send('bg_windowload', 'text from background' )
}

