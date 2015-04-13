var alt = require('../support/alt');

var PlatformActions = function() {
	return {
		updatePlatform: function(selected_platform) { this.dispatch(selected_platform); },
		loadDefaulted: function(data) { this.dispatch(data); },
		loadSiteMap: function(json) { this.dispatch(json); }
	}
}

module.exports = alt.createActions(PlatformActions());
