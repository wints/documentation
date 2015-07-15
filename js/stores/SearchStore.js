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

		onTop5: function(top5_term) {
			// Checks if the query is empty
			if (!top5_term[1].length) {
				this.state.results = [];
			}
			// Makes sure results stay showing if the next letter added/removed from the query doesn't turn up any search results
			else if (top5_term[0].length) {
				this.state.results = top5_term[0];
			}
		}
	};
};

module.exports = alt.createStore(SearchStore());
