var lunr = require('lunr'),
	fs = require('fs'),
	path = require('path'),
	R = require('ramda');

var utils = require('./utils.js');

var directoryPaths = ['../../_site/recipes', '../../_site/references', '../../_site/overviews'];

// console.log('Working?', utils.walk('../_site/recipes'));
// console.log(utils.convertSubsectionsToJSON('../_site/recipes/analytics_adjust/index.html'));

// Creates an object of three different arrays of objects for default, ios, and android
function outPutJSONData(directories) {
	var JSON_data = {'deflt': [], 'ios': [], 'android': []};
	for (var i = 0; i < directories.length; i++) {
		JSON_data = utils.mergeObject(JSON_data, utils.walk(directories[i]));
	};
	fs.writeFileSync('./JSON_data.json', JSON.stringify(JSON_data));
	console.log('JSON data stored.');
}

// Create the index
// output: the file to put the index into
// ind: the key of JSON data to use {deflt, ios, android}
function buildIndex(output, key) {
	var index = lunr(function(){
		this.ref('id');
	    // boost increases the importance of words found in this field
	    this.field('title', {boost: 10});
	    this.field('body');
	});

	fs.readFile('./JSON_data.json', function (err, data) {
		if (err) throw err;

		var raw = JSON.parse(data)[key];

		raw.forEach(function(section) {
			index.add(section);
		})

		fs.writeFile(output, JSON.stringify(index), function(err) {
			if (err) throw err;
			console.log('Index outputted');
		})
	})
}

function buildAllIndexes() {
	buildIndex('./index_default.json', 'deflt');
	buildIndex('./index_ios.json', 'ios');
	buildIndex('./index_android.json', 'android');
}

function getPlatformTerms(index) {
	var terms = [];
	var data = JSON.parse(fs.readFileSync(index));
	var docs = data.documentStore.store;
	for (var key in docs) {
		if (docs.hasOwnProperty(key)) {
			for (var i = 0; i < docs[key].length; i++) {
				var keywords = docs[key][i].split(/[.:()@,\"\/;<>\'“"]/);
				for (var j = 0; j < keywords.length; j++) {
					if (terms.indexOf(keywords[j]) == -1) {
					terms.push(keywords[j]);
					}
				}
			}
		}
	}
	return terms;
}

function comparePlatformTerms() {
	var ios_terms = getPlatformTerms('./index_ios.json').sort();
	var android_terms = getPlatformTerms('./index_android.json').sort();
	var results = JSON.stringify({'ios': R.difference(ios_terms, android_terms), 'android': R.difference(android_terms, ios_terms)});
	fs.writeFileSync('./platform_terms.json', 
		results
	);
}

comparePlatformTerms();

// outPutJSONData(directoryPaths);
// buildAllIndexes();
