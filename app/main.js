'use strict';

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
	// Create the browser window.
	global.win = new BrowserWindow({width: 1200, height: 800});

	// and load the index.html of the app.
	win.loadURL(url.format({
		pathname: path.join(__dirname, './client/index.html'),
		protocol: 'file:',
		slashes: true
	}));
}

app.on('ready', createWindow);
