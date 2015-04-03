function setPlatform(platform) {
	console.log('set platform:', platform);
	localStorage.setItem('platform', platform);
}

function getPlatform() {
	console.log('get platform:', localStorage.getItem('platform'));
}

function setHeaderToPlatform() {
	console.log('current platform: ', localStorage.getItem('platform'));
}