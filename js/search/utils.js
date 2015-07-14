var fs = require('fs'),
	cheerio = require('cheerio'),
	path = require('path');

var utils = {};

// Merges two objects where all values are arrays and keys are the same
utils.mergeObject = function(originObject, mergeObject) {
	var temp = originObject;
	for (var key in temp) {
		temp[key] = temp[key].concat(mergeObject[key]);
	}
	return temp;
};

// Traverses a directory looking for index.html files
utils.walk = function(directoryPath) {
	var to_check = [],
		final_indexes = { 'default': [], 'ios': [], 'android': [] };
	if (to_check.length < 1) { to_check = to_check.concat(fs.readdirSync(directoryPath)); }
	if (to_check.indexOf('index.html') > -1) {
		if (path.basename(directoryPath) == 'ios') { final_indexes.ios = final_indexes.ios.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
		else if (path.basename(directoryPath) == 'android') { final_indexes.android = final_indexes.android.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
		else {
			final_indexes.default = final_indexes.default.concat(utils.convertSubsectionsToJSON(directoryPath + '/index.html')); }
	}
	for (var i = 0; i < to_check.length; i++) {
		if (fs.lstatSync(directoryPath + '/' + to_check[i]).isDirectory()) {
			final_indexes = utils.mergeObject(final_indexes, (utils.walk(directoryPath + '/' + to_check[i])));
		}
	}
	to_check = to_check.shift();
	return final_indexes;
};

// Reads files and parses by h2/h3/h4 into JSON objects
// title: text inside of <a> tag with href="#..."
// body: all text between headers excluding tags
// id: dev.branch.io + og:url + href
// 1. Read file 2. Split by header tag 3. Grab title information/href 4. Split by other header tag 5. Remove tags and add information to body
var id_counter = 0;
utils.convertSubsectionsToJSON = function(filePath) {
	var JSON_data = [];
	var data = fs.readFileSync(filePath);
	var $ = cheerio.load(data.toString());
	$('h2, h3').each(function() {
		var JSON_obj = {};

		var og_url = $('meta[property="og:url"]').attr('content');

		JSON_obj.title = $(this).text();
		// console.log('Title: ' + JSON_obj.title);

		JSON_obj.id = id_counter++;

		if ($(this).children('a[href^="#"]').attr('href')) { JSON_obj.url = '' + og_url + $(this).children('a[href^="#"]').attr('href'); }
		else { JSON_obj.url = '' + og_url; }
		// console.log('Link: ' + JSON_obj.url);

		// Gets all elements between each header and outputs their text
		JSON_obj.body = $(this).nextUntil('h2, h3').not('script').text();
		// console.log('Body: ' + JSON_obj.body);

		JSON_data.push(JSON_obj);
		// console.log ('JSON_data', JSON_data);
	});
	return JSON_data;
};

utils.firstWord = function(query) {
	return query.split(' ')[0];
};

utils.isSubstringArray = function(arr, term) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].toLowerCase().indexOf(term) > -1) {
			return arr[i];
		}
	}
	return null;
};

// Taken from http://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
utils.mode = function(arr) {
    if (arr.length == 0) { return null; }
    var modeMap = {};
    var maxEl = arr[0], maxCount = 1;
    for (var i = 0; i < arr.length; i++) {
		var el = arr[i];
		if (modeMap[el] == null) { modeMap[el] = 1; }
		else { modeMap[el]++; }
		if (modeMap[el] > maxCount) {
			maxEl = el;
			maxCount = modeMap[el];
		}
    }
    return maxEl;
};

utils.removeAllFromArray = function(arr, val) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == val) {
			arr.splice(i, 1);
			i--;
		}
	}
	return arr;
};

 module.exports = utils;
