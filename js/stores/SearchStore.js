var alt = require('../support/alt'),
	SearchActions = require('../actions/SearchActions');

var SearchStore = function() {
	return {
		displayName: 'SearchStore',
		bindListeners: {
			onIndexLoad: SearchActions.loadIndex,
			onTop5: SearchActions.top5
		},

		state: {
			results: [],
			indexes: {},
			isLoaded: false
		},

		onIndexLoad: function(index) {
			this.state.indexes = index;
			this.state.isLoaded = true;
		},

		onTop5: function(top5) {
			this.state.results = top5;
		}
	};
};

module.exports = alt.createStore(SearchStore());
