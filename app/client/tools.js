'use strict';

const imageExtensions = require('./extensions/images');
const videoExtensions = require('./extensions/videos');

function isImage(filePath) {
	for (const ext of imageExtensions) {
		if (filePath.endsWith(ext)) {
			return true;
		}
	}
	return false;
}

function isVideo(filePath) {
	for (const ext of videoExtensions) {
		if (filePath.endsWith(ext)) {
			return true;
		}
	}
	return false;
}

module.exports = {
	isImage,
	isVideo,
};
