var fs = require('fs'),
	cheerio = require('cheerio'),
	B = require('bluebird'),
	path = require('path');

var platformTerms = require('./platform_terms');

var utils = {};

// Merges two objects where all values are arrays and keys are the same
utils.mergeObject = function(originObject, mergeObject) {
	var temp = originObject;
	for (key in temp) {
		temp[key] = temp[key].concat(mergeObject[key]);
	}
	return temp;
}

utils.walk = function(directoryPath) {
	var results = [],
		to_check = [],
		final_indexes = {'deflt': [], 'ios': [], 'android': []};
	if (to_check.length < 1) { to_check = to_check.concat(fs.readdirSync(directoryPath)); }
	if (to_check.indexOf('index.html') > -1) {
		if (path.basename(directoryPath) == 'ios') { final_indexes.ios = final_indexes.ios.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
		else if (path.basename(directoryPath) == 'android') { final_indexes.android = final_indexes.android.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
		else { final_indexes.deflt = final_indexes.deflt.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
	}
	for (var i = 0; i < to_check.length; i++) {
		if (fs.lstatSync(directoryPath + '/' + to_check[i]).isDirectory()) {
			final_indexes = utils.mergeObject(final_indexes, (utils.walk(directoryPath + '/' + to_check[i])));
		}
	}
	to_check = to_check.shift();
	return final_indexes;
}

// Reads files and parses by h2/h3/h4 into JSON objects
// title: text inside of <a> tag with href="#..."
// body: all text between headers excluding tags
// id: dev.branch.io + og:url + href
// 1. Read file 2. Split by header tag 3. Grab title information/href 4. Split by other header tag 5. Remove tags and add information to body

utils.convertSubsectionsToJSON = function(filePath) {
	var JSON_data = [];
	var data = fs.readFileSync(filePath);
	var $ = cheerio.load(data.toString());
	$('h2, h3').each(function(i, elem) {
		var JSON_obj = {};

		dev_url = 'http://dev.branch.io';
		og_url = $('meta[property="og:url"]').attr('content');

		JSON_obj.title = $(this).text();
		// console.log('Title: ' + JSON_obj.title);

		if ($(this).children('a[href^="#"]').attr('href')) { JSON_obj.id = dev_url + og_url + $(this).children('a[href^="#"]').attr('href'); }
		else { JSON_obj.id = dev_url + og_url; }
		// console.log('Link: ' + JSON_obj.id);

		// Gets all elements between each header and outputs their text
		JSON_obj.body = $(this).nextUntil('h2, h3').not('script').text();
		// console.log('Body: ' + JSON_obj.body);

		JSON_data.push(JSON_obj);
		// console.log ('JSON_data', JSON_data);
	})
	return JSON_data
};


utils.debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.prototype.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Take in the form data and returns whether any of the words are ios/android specific to choose which index to search
utils.platformFromQuery = function(query) {
	var words = query.split(' ');
	for (var i = 0; i < words.length; i++) {
		if (platformTerms.ios.indexOf(words[i]) > -1) {
			return 'ios';
		}
		else if (platformTerms.android.indexOf(words[i]) > -1) {
			return 'android'
		}
	}
	return 'none';
}

utils.firstWord = function(query) {
	return query.split(' ')[0];
}

 module.exports = utils;
