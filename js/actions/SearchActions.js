var	superagent = require('superagent'),
	path = require('path');

var alt = require('../support/alt');

var SearchActions = function() {
	return {
		loadIndex: function() {
			var self = this;
			superagent.get(path.resolve(__dirname, '../js/search/builtFiles/master_data.json')).end(function(err, res) {
				if (err) { throw err; }
				self.dispatch(res);
			});
		}
	};
};

module.exports = alt.createActions(SearchActions());
