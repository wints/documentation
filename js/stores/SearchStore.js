var alt = require('../support/alt'),
	SearchActions = require('../actions/SearchActions');

function getLoaded() {
	return (typeof localStorage !== 'undefined');
}

var SearchStore = function() {
	return {
		displayName: 'SearchStore',
		bindListeners: {
			onIndexLoad: SearchActions.loadIndex
		},

		state: {
			field: '',
			data: [],
			isLoaded: getLoaded(),
			indexes: null
		},

		onIndexLoad: function(index) {
			localStorage.setItem('index', 'loaded');
			this.state.indexes = index.text;
		}
	};
};

module.exports = alt.createStore(SearchStore());
