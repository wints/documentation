var alt = require('../support/alt'),
	PlatformActions = require('../actions/PlatformActions');

function getPlatformState() {
	var platform;
	if (typeof localStorage !== 'undefined') {
		platform = localStorage.getItem('platform');
	}
	return platform || 'ios';
}

var PlatformStore = function() {
	return {
		displayName: 'PlatformStore',
		bindListeners: {
		  onUpdatePlatform: PlatformActions.updatePlatform,
		  onLoadDefaulted: PlatformActions.loadDefaulted,
		  onLoadSiteMap: PlatformActions.loadSiteMap
		},

		state: {
			platform: getPlatformState(),
			defaulted: false,
			site_map: []
		},

		onUpdatePlatform: function(platform) {
			this.state.platform = platform;
		},
		onLoadDefaulted: function(data) {
			this.state.defaulted = data.defaulted;
			if (!data.defaulted) {
				this.onUpdatePlatform(data.current_platform);
			}
		},
		onLoadSiteMap: function(json) {
			this.state.site_map = JSON.parse(json);
		}
	}
}

module.exports = alt.createStore(PlatformStore());
