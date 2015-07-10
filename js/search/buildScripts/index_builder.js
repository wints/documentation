var lunr = require('lunr'),
	fs = require('fs'),
	path = require('path'),
	R = require('ramda');

var utils = require('../utils');
	// customSWF = require('../custom_stop_word_filter');

var __dirname;

var directoryPaths = [ path.resolve(__dirname, '../../../_site/recipes'), path.resolve(__dirname, '../../../_site/references'), path.resolve(__dirname, '../../../_site/overviews') ];

// Creates an object of three different arrays of objects for default, ios, and android
// directories: the directories to gather JSON data from, defaults to recipes, references, and overviews
function outPutJSONData(directories, callback) {
	var JSON_data = { 'deflt': [], 'ios': [], 'android': [] };
	for (var i = 0; i < directories.length; i++) {
		JSON_data = utils.mergeObject(JSON_data, utils.walk(directories[i]));
	}
	fs.writeFileSync(path.resolve(__dirname, '../builtFiles/JSON_data.json'), JSON.stringify(JSON_data));
	console.log('1. JSON data stored.');
	callback();
}

// Create the index
// output: the file to put the index into
// ind: the key of JSON data to use {deflt, ios, android}
function buildIndex(output, key) {
	var index = lunr(function() {
		this.ref('id');
		// boost increases the importance of words found in this field

		this.field('title', { boost: 10 });
		this.field('body');
		this.field('url');

		// this.pipeline.add(customSWF);
	});

	var data = fs.readFileSync(path.resolve(__dirname, '../builtFiles/JSON_data.json'));
	var raw = JSON.parse(data)[key];

	raw.forEach(function(section) {
		index.add(section);
	});
	fs.writeFileSync(output, JSON.stringify(index));
}

// Builds indexes for all platforms
function buildAllIndexes(callback) {
	buildIndex(path.resolve(__dirname, '../builtFiles/index_default.json'), 'deflt');
	buildIndex(path.resolve(__dirname, '../builtFiles/index_ios.json'), 'ios');
	buildIndex(path.resolve(__dirname, '../builtFiles/index_android.json'), 'android');
	console.log('2. Indexes created');
	callback();
}

// Scrapes the words used on the pages for a platform from its index
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

// Compares the words used between platforms and find the platform specific terms
function comparePlatformTerms() {
	var ios_terms = getPlatformTerms(path.resolve(__dirname, '../builtFiles/index_ios.json')).sort();
	var android_terms = getPlatformTerms(path.resolve(__dirname, '../builtFiles/index_android.json')).sort();
	var results = JSON.stringify({ 'ios': R.difference(ios_terms, android_terms), 'android': R.difference(android_terms, ios_terms) });
	fs.writeFileSync(path.resolve(__dirname, '../builtFiles/platform_terms.json'),
		results
	);
	console.log('3. Platform terms created');
}

function build() {
	outPutJSONData(directoryPaths, function(err) {
		if (err) { throw err; }
		buildAllIndexes(function(err2) {
			if (err2) { throw err2; }
			comparePlatformTerms();
		});
	});
}

build();
