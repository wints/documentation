window.onload = function() {
	if(!getPlatform()) { setPlatform('ios'); }
}

function setPlatform(platform) {
	localStorage.setItem('platform', platform);
}

function getPlatform() {
	var platform = localStorage.getItem('platform');
	return platform;
}

function setHeaderToPlatform(current_platform, default_platform) {
	if (default_platform) {
		var cachedPlatform = localStorage.getItem('platform');
		$('.nav#' + current_platform).parent().removeClass('active');
		$('.nav#' + cachedPlatform).parent().addClass('active');
	}
}

// $('h2[id], h1[id]')