window.onload = function() {
	console.log('loaded');
	if(!getPlatform()) { setPlatform('ios'); }
}

function setPlatform(platform) {
	console.log('set platform:', platform);
	localStorage.setItem('platform', platform);
}

function getPlatform() {
	var platform = localStorage.getItem('platform');
	console.log('get platform:', platform);
	return platform;
}

function setHeaderToPlatform() {
	console.log('current platform: ', localStorage.getItem('platform'));
}