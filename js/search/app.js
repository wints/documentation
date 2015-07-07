var lunr = require('lunr'),
	underscore = require('underscore');
	path = require('path');

var data = require('./JSON_data'),
	indexDumpDefault = require('./index_default'),
	indexDumpIos = require('./index_ios'),
	indexDumpAndroid = require('./index_android');
	utils = require('./utils.js');

var app = {};

app.indexSource = function(term) {
	if (utils.platformFromQuery(term) == 'ios') {
		return [indexDumpIos, 'ios'];
	}
	else if (utils.platformFromQuery(term) == 'android') {
		return [indexDumpAndroid, 'android'];
	}
	else {
		return [indexDumpDefault, 'deflt'];
	}
}

app.search = function(term) {
	var dump = app.indexSource(term);
	var index = lunr.Index.load(dump[0]);
 	var subsections = data[dump[1]].map(function(raw) {
	    return {
	      id: raw.id,
	      title: raw.title,
	      body: raw.body,
	    }
 	});

	var results = index.search(term).map(function(result) {
		return subsections.filter(function (q) { return q.id === result.ref })[0]
	});
	
	return results;
}

app.top5 = function(term) {
	var results = app.search(term);

	var top5 = []
	for (var i = 0; i < 5 && i < results.length; i++) {
		top5.push(results[i]);
	}
	return top5;
}

app.debounced_search = function(term) {
	return underscore.debounce(function() {
		var index = lunr.Index.load(indexDump);
		console.log('Index created');

	 	var subsections = data.map(function(raw) {
		    return {
		      id: raw.id,
		      title: raw.title,
		      body: raw.body,
		    }
	 	});
	 	console.log('subsections found');
		var results = index.search(term).map(function(result) {
			return subsections.filter(function (q) { return q.id === result.ref })[0]
		});
		var top5 = []

		for (var i = 0; i < 5; i++) {
			top5.push(results[i]);
		}
		console.log(top5);
		return top5;
	}, 250)();
}

app.getResultOrigin = function(result) {
	var origin = path.basename(path.dirname(result.id));
	if (origin == 'ios' || origin == 'android') {
		origin = path.basename(path.dirname(path.dirname(result.id)));
	}
	var parts = origin.replace(/_/g, ' ');
	String.prototype.capitalize = function() {
    	return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
	};
	return parts.capitalize();
}

app.getContext = function(result, accuracy, query) {
	var term = utils.firstWord(query);
	var body = result.title.split(' ').concat(result.body.split(' '));
	var index_term = body.indexOf(term);
	var pre_context = [],
		post_context = [];
	for (var i = 0; i < accuracy; i++) {
		pre_context.push(body[index_term - (accuracy - i)]);
	}
	for (var j = 0; j < accuracy; j++) {
		post_context.push(body[index_term + j + 1]);
	}
	return [pre_context.toString().replace(/,/g,' ') + ' ', term, ' ' + post_context.toString().replace(/,/g,' ')];
}

module.exports = app;