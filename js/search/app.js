var lunr = require('lunr'),
	underscore = require('underscore');

var data = require('./JSON_data'),
	indexDump = require('./index'),
	utils = require('./utils.js');

var app = {};

app.search = function(term) {
	var index = lunr.Index.load(indexDump);

 	var subsections = data.map(function(raw) {
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
	for (var i = 0; i < 5; i++) {
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

module.exports = app;