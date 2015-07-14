var	superagent = require('superagent');

var alt = require('../support/alt');

var SearchActions = function() {
	return {
		loadIndex: function() { 
			var self = this;
			superagent.get('../js/search/builtFiles/master_data.json').end(function(err, res) {
				if (err) { throw err; }
				self.dispatch(res);
			});
		}
	};
};

module.exports = alt.createActions(SearchActions());

//
//http://dev.branch.io.s3-website-us-west-1.amazonaws.com/js/master_data.json