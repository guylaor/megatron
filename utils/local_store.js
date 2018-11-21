const electron = require('electron');
const path = require('path');
const fs = require('fs');

class LocalStore {
    
    constructor(opt) {
        this.fileName = opt.fileName;
        this.userDataPath = (electron.app || electron.remote.app).getPath('userData');
        this.path = path.join(this.userDataPath, this.fileName + '.json');
        if ( typeof opt.configFile !== "undefined" && opt.configFile.length > 0 ) {
            this.path = opt.configFile;
        } 
        this.data = {}
        this.template = opt.template;
        this.error = ""
    }

    // load the local storage file, if it doesn't exist, try to create it with the given template
    initialize() {
        
        try {
            fs.accessSync(this.path, fs.constants.R_OK | fs.constants.W_OK);
            // file exist, try to read it
            console.log('can read/write');
            this.data = this.loadJson();

        } catch (err) {
            // file did not exist, try to create it. 
            console.log('file did not exist, creating it');
            this.writeJson(this.template)
            this.data = this.loadJson();
        }

        // check that data is not empty
        if (Object.keys(this.data).length > 0) {
            return true
        }
        return false
    }

    loadJson() {
    
        try {
             return JSON.parse(fs.readFileSync(this.path));
        } catch(error) {
        // if there was some kind of error, return empty object.
            return {};
        }
    }

    writeJson(obj) {

        try {
            fs.writeFileSync(this.path, JSON.stringify(obj));
        }
        catch (error) {
            console.log(error)
        }

    }

}

module.exports = LocalStore;