var superagent = require('superagent');

var alt = require('../support/alt');

var SearchActions = function() {
	return {
		loadIndex: function() {
			var self = this;
			superagent.get('/js/search/built_files/master_data.json').end(function(err, res) {
				if (err) { throw err; }
				self.dispatch(JSON.parse(res.text));
			});
		},
		top5: function(query) {
			this.dispatch(query);
		}
	};
};

module.exports = alt.createActions(SearchActions());
