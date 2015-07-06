var lunr = require('lunr'),
	fs = require('fs'),
	path = require('path');

var utils = require('./utils.js');

var directoryPaths = ['../../_site/recipes', '../../_site/references', '../../_site/overviews'];

// console.log('Working?', utils.walk('../_site/recipes'));
// console.log(utils.convertSubsectionsToJSON('../_site/recipes/analytics_adjust/index.html'));

function outPutJSONData(directories) {
	var JSON_data = [];
	for (var i = 0; i < directories.length; i++) {
		JSON_data = JSON_data.concat(utils.walk(directories[i]));
	};
	fs.writeFileSync('./JSON_data.json', JSON.stringify(JSON_data));
	console.log('JSON data stored.');
}

// Create the index
// directories : an array of directories for indexing
function buildIndex() {
	var index = lunr(function(){
		this.ref('id');
	    // boost increases the importance of words found in this field
	    this.field('title', {boost: 10});
	    this.field('body');
	});

	fs.readFile('./JSON_data.json', function (err, data) {
		if (err) throw err;

		var raw = JSON.parse(data);

		raw.forEach(function(section) {
			index.add(section);
		})

		fs.writeFile('./index.json', JSON.stringify(index), function(err) {
			if (err) throw err;
			console.log('Index outputted');
		})
	})
}

// outPutJSONData(directoryPaths);
//writeIndex(addToIndex(directoryPaths, buildIndex()));
