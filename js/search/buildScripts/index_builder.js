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
function outPutJSONData(directories) {
	var JSON_data = { 'default': [], 'ios': [], 'android': [] };
	for (var i = 0; i < directories.length; i++) {
		JSON_data = utils.mergeObject(JSON_data, utils.walk(directories[i]));
	}
	console.log('1. JSON data stored.');
	return JSON_data;
}

// Create the index
// output: the file to put the index into
// ind: the key of JSON data to use {default, ios, android}
function buildIndex(key, JSON_data) {
	var index = lunr(function() {
		this.ref('id');
		// boost increases the importance of words found in this field

		this.field('title', { boost: 10 });
		this.field('body');
		this.field('url');

		// this.pipeline.add(customSWF);
	});

	var raw = JSON_data[key];

	raw.forEach(function(section) {
		index.add(section);
	});
	return index;
}

// Builds indexes for all platforms
function buildAllIndexes(JSON_data) {
	var indexes = {};
	indexes['default'] = buildIndex('default', JSON_data);
	indexes.ios = buildIndex('ios', JSON_data);
	indexes.android = buildIndex('android', JSON_data);
	console.log('2. Indexes created');
	return indexes;
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
function comparePlatformTerms(callback) {
	var ios_terms = getPlatformTerms(path.resolve(__dirname, '../builtFiles/index_ios.json')).sort();
	var android_terms = getPlatformTerms(path.resolve(__dirname, '../builtFiles/index_android.json')).sort();
	var results = { 'ios': R.difference(ios_terms, android_terms), 'android': R.difference(android_terms, ios_terms) };
	console.log('3. Platform terms created');
	return results;
}

function build() {
	var masterFile = {};
	masterFile.JSON_data = outPutJSONData(directoryPaths)
	masterFile.indexes = buildAllIndexes(masterFile.JSON_data);
	masterFile.platform_terms = comparePlatformTerms();
	fs.writeFile(path.resolve(__dirname, '../builtFiles/master_data.json'), JSON.stringify(masterFile),'utf-8', function(err) {
		if (err) { throw err; }
		console.log('Master written.');
	})
}

build();
