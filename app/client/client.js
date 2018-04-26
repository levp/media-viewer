'use strict';

const {isImage, isVideo} = require('./tools');

document.addEventListener('DOMContentLoaded', main);

function main() {
	const fileInput = document.getElementById('file-input');
	const mediaImage = document.getElementById('media-image');
	const mediaVideo = document.getElementById('media-video');

	fileInput.addEventListener('change', () => {
		const file = fileInput.files[0];

		if (!file) {
			console.log('No file selected.');
			return;
		}

		const filePath = file.path;

		if (isImage(filePath)) {
			// set image
			mediaImage.src = filePath;
			mediaVideo.src = '';
			return;
		}

		if (isVideo(filePath)) {
			// set video
			mediaImage.src = '';
			mediaVideo.src = filePath;
			return;
		}

		// TODO: Better error handling; let the user know!
		console.error('Selected file name did not match any known image or video extensions.');
	});
}

