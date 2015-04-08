var fs = require('fs'),
	path = require('path'),
	accum = require('accum'),
	React = require('react'),
	tools = require('react-tools'),
	reactify = require('reactify'),
	browserify = require('browserify');

require.extensions['.jsx'] = function(module, filename) {
	module._compile(tools.transform(fs.readFileSync(filename, {encoding: 'utf8'})), filename);
};


var components = {};
fs.readdirSync(path.join(__dirname, '..', 'js/components')).forEach(function(file) {
	components[file.replace(/\.jsx?$/, '')] = require(path.join(__dirname, '..', 'js/components', file));
});



function bundle() {
	var b = browserify({
		basedir: path.join(__dirname, '../js'),
		extensions: [ '.jsx' ]
	})
	b.transform(reactify);
	b.add(process.stdin);
	b.bundle().pipe(process.stdout);
}

function renderReact() {
	process.stdin.pipe(accum(function(data) {
		var id = Math.random().toString(36).substring(2);
		// First: render the JSX
		var out = '<script type="text/javascript">' + tools.transform('$(function() { React.render(' + data + ', $("#' + id + '")[0]); });') + '</script>';

		// Yuck
		with (components) {
			out += '<div id="' + id + '">' + eval(tools.transform('React.renderToString(' + data + ')')) + '</div>';
		}

		console.log(out);
	}));
}

if (process.argv[2] == 'bundle') { bundle(); }
else { renderReact(); }
