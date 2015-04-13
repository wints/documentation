---
---

window.Tab = require('./components/Tab');
window.Tabs = require('./components/Tabs');
window.Sidebar = require('./components/Sidebar');
window.React = require('react');
window.PlatformActions = require('./actions/PlatformActions')

function setPlatform(platform) {
	localStorage.setItem('platform', platform);
}

function getPlatform() {
	var platform = localStorage.getItem('platform');
	return platform;
}

