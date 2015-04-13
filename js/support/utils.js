R = require('ramda');

var utils = {};

utils.cx = R.pipe(
	R.pickBy(R.identity),
	R.keys(),
	R.join(' ')
);

module.exports = utils;
