const { exec } = require('child_process');

class FileOpener {

    constructor() {

        this.isMac = process.platform === "darwin";
        this.isWin = process.platform ===  "win32";

        this.MacCommand = {
            "word": `open -a "Microsoft Word" PATH`
        }
        this.WinCommand = {
            "word": `start winword "PATH"`
        }
    }

    Open(_path, app) {
        let path = _path;
        let command = ""

        if (this.isMac) {
            command = this.MacCommand[app]
        }
        if (this.isWin) {
            command = this.WinCommand[app]
        }

        command = command.replace("PATH", path);

        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.log(arr);
            // node couldn't execute the command
            return;
            }
        });

    }
}


module.exports = FileOpener;