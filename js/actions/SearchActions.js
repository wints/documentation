var superagent = require('superagent'),
	lunr = require('lunr'),
	path = require('path');

var alt = require('../support/alt'),
	utils = require('../search/utils');

// Take in the form data and returns whether any of the words are ios/android specific to choose which index to search
function platformFromQuery(query, data) {
	var words = query.split(' ');
	for (var i = 0; i < words.length; i++) {
		if (data.platform_terms.ios.indexOf(words[i]) > -1) {
			return 'ios';
		}
		else if (data.platform_terms.android.indexOf(words[i]) > -1) {
			return 'android';
		}
	}
	return 'none';
}

// Returns whether the current query is platform specific
function indexSource(term, data) {
	if (platformFromQuery(term, data) == 'ios') {
		return [ data.indexes.ios, 'ios' ];
	}
	else if (platformFromQuery(term, data) == 'android') {
		return [ data.indexes.android, 'android' ];
	}
	else {
		return [ data.indexes.default, 'default' ];
	}
}

function search(term, data) {
	var dump = indexSource(term, data);
	var index = lunr.Index.load(dump[0]);
	var subsections = data.JSON_data[dump[1]].map(function(raw) {
		return {
			id: raw.id,
			title: raw.title,
			body: raw.body,
			url: raw.url
		};
	});

	var results = index.search(term).map(function(result) {
		return subsections.filter(function(q) { return q.id == result.ref; })[0];
	});

	return results;
}

// Gives the title of the page that the result is on
function getResultOrigin(result) {
	var origin = path.basename(path.dirname(result.url));
	if (origin == 'ios' || origin == 'android') {
		origin = path.basename(path.dirname(path.dirname(result.url)));
	}
	var parts = origin.replace(/_/g, ' ');

	return parts.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

// Gives a context to the first search term within the result
function getContext(result, accuracy, query) {
	var term = utils.firstWord(query);
	var body = result.title.split(' ').concat(result.body.split(' '));
	var index_term = body.indexOf(term);
	var pre_context = [],
		post_context = [];
	if (index_term == -1) {
		term = utils.isSubstringArray(body, term);
		index_term = body.indexOf(term);
	}
	for (var i = 0; i < accuracy; i++) {
		pre_context.push(body[index_term - (accuracy - i)]);
	}
	for (var j = 0; j < accuracy; j++) {
		post_context.push(body[index_term + j + 1]);
	}
	return [ pre_context.toString().replace(/,/g, ' ') + ' ', term, ' ' + post_context.toString().replace(/,/g, ' ') ];
}

var SearchActions = function() {
	return {
		loadIndex: function() {
			var self = this;
			superagent.get('/js/search/built_files/master_data.json').end(function(err, res) {
				if (err) { throw err; }
				self.dispatch(JSON.parse(res.text));
			});
		},

		// Returns the top 5 results of search
		top5: function(term, data) {
			var results = search(term, data);

			var top5 = [];
			for (var i = 0; i < 5 && i < results.length; i++) {
				top5.push(results[i]);
				results[i].origin = getResultOrigin(results[i]);
				results[i].context = getContext(results[i], 7, term);
			}
			this.dispatch([ top5, term ]);
		}
	};
};

module.exports = alt.createActions(SearchActions());
