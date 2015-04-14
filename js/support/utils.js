R = require('ramda');

var utils = {};

utils.cx = R.pipe(
	R.pickBy(R.identity),
	R.keys(),
	R.join(' ')
);

utils.pageHasPlatform = function(site_map, current_path, platform) {
	var path = current_path.split('/');
	path[0] = path[0].substring(0, path[0].length-1);
	path = [ path[0], 'pages', path[1], 'platforms', platform ];

	return !!R.path(path, site_map);
}

module.exports = utils;
