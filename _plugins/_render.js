var fs = require('fs'),
	path = require('path'),
	accum = require('accum'),
	React = require('react'),
	tools = require('react-tools'),
	reactify = require('reactify'),
	browserify = require('browserify'),
	stream = require('stream'),
	through = require('through2');

require.extensions['.jsx'] = function(module, filename) {
	module._compile(tools.transform(fs.readFileSync(filename, {encoding: 'utf8'})), filename);
};

var components = {};
fs.readdirSync(path.join(__dirname, '..', 'js/components')).forEach(function(file) {
	components[file.replace(/\.jsx?$/, '')] = require(path.join(__dirname, '..', 'js/components', file));
});

var _cache = {}, _packageCache = {};
function bundle(data, c) {

	var startTime = new Date();
	var s = new stream.Readable();
	s.push(data);
	s.push(null);

	var b = browserify({
		cache: _cache,
		packageCache: _packageCache,
		fullPaths: true,
		basedir: path.join(__dirname, '../js'),
		extensions: [ '.jsx' ]
	})
	b.transform(reactify);
	b.add(s);

/*
	b.pipeline.get('deps').push(through.obj(function(row, enc, next) {
		_cache[row.file] = JSON.parse(JSON.stringify({ id: row.file, source: row.source, deps: row.deps, file: row.file }));
		next();
	}));
*/

	b.bundle().pipe(accum(function(data) {
		data = JSON.stringify(String(data));
		c.write(String("0000000000" + data.length).slice(-10));
		fs.writeFileSync('node.txt', data);
		data.match(/.{0,10000}/g).forEach(function(piece) {
			c.write(piece);
		});
	}));
}

function renderReact(data, c) {
	var id = Math.random().toString(36).substring(2);
	// First: render the JSX
	var out = '<script type="text/javascript">' + tools.transform('$(function() { React.render(' + data + ', $("#' + id + '")[0]); });') + '</script>';

	// Yuck
	with (components) {
		out += '<div id="' + id + '">' + eval(tools.transform('React.renderToString(' + data + ')')) + '</div>';
	}

	c.write(out);
}

var net = require('net');
var server = net.createServer(function(c) {
	c.on('data', function(data) {
		var data = JSON.parse(data.toString());
		if (data.type == 'bundle') { bundle(data.data, c); }
		else { renderReact(data.data, c); }
	});
});
server.listen(process.argv[2], function() {});
