var lunr = require('lunr'),
	path = require('path');

var data = require('../builtFiles/JSON_data'),
	indexDumpDefault = require('../builtFiles/index_default'),
	indexDumpIos = require('../builtFiles/index_ios'),
	indexDumpAndroid = require('../builtFiles/index_android'),
	utils = require('../utils'),
	platformTerms = require('../builtFiles/platform_terms'),
	customSWF = require('../custom_stop_word_filter');

var app = {};

app.register = function() {
	lunr.Pipeline.registerFunction(customSWF, 'customSWF');
};

// Take in the form data and returns whether any of the words are ios/android specific to choose which index to search
app.platformFromQuery = function(query) {
	var words = query.split(' ');
	for (var i = 0; i < words.length; i++) {
		if (platformTerms.ios.indexOf(words[i]) > -1) {
			return 'ios';
		}
		else if (platformTerms.android.indexOf(words[i]) > -1) {
			return 'android';
		}
	}
	return 'none';
};

// Returns whether the current query is platform specific
app.indexSource = function(term) {
	if (app.platformFromQuery(term) == 'ios') {
		return [ indexDumpIos, 'ios' ];
	}
	else if (app.platformFromQuery(term) == 'android') {
		return [ indexDumpAndroid, 'android' ];
	}
	else {
		return [ indexDumpDefault, 'deflt' ];
	}
};

app.search = function(term) {
	var dump = app.indexSource(term);
	var index = lunr.Index.load(dump[0]);
	var subsections = data[dump[1]].map(function(raw) {
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
};

// Returns the top 5 results of search
app.top5 = function(term) {
	var results = app.search(term);

	var top5 = [];
	for (var i = 0; i < 5 && i < results.length; i++) {
		top5.push(results[i]);
	}
	return top5;
};

// Gives the title of the page that the result is on
app.getResultOrigin = function(result) {
	var origin = path.basename(path.dirname(result.url));
	if (origin == 'ios' || origin == 'android') {
		origin = path.basename(path.dirname(path.dirname(result.url)));
	}
	var parts = origin.replace(/_/g, ' ');

	return parts.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

// Gives a context to the first search term within the result
app.getContext = function(result, accuracy, query) {
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
};

module.exports = app;
