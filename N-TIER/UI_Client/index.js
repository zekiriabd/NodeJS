const {app , BrowserWindow} = require('electron');

function createWindows(){
let appWindow = new BrowserWindow();
//appWindow.loadURL('http://localhost:8080/getUsers');
appWindow.loadURL('http://localhost:8080/getUser/1');
//appWindow.loadURL('http://localhost:8080/getUser/9');
}

app.on('ready', createWindows);