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
			clearBoth();
			return;
		}

		const filePath = file.path;

		if (isImage(filePath)) {
			setImage(filePath);
			return;
		}

		if (isVideo(filePath)) {
			setVideo(filePath);
			return;
		}

		// TODO: Better error handling; let the user know!
		clearBoth();
		console.error('Selected file name did not match any known image or video extensions:', filePath);
	});

	/////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////////////

	function clearImage() {
		mediaImage.src = '';
		mediaImage.style.display = 'none';
	}

	function clearVideo() {
		mediaVideo.src = '';
		mediaVideo.style.display = 'none';
	}

	function setImage(filePath) {
		clearVideo();
		mediaImage.src = filePath;
		mediaImage.style.display = '';
	}

	function setVideo(filePath) {
		clearImage();
		mediaVideo.src = filePath;
		mediaVideo.style.display = '';
	}

	function clearBoth() {
		clearImage();
		clearVideo();
	}
}



