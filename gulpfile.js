'use strict';

var path = require('path'),
	gulp  = require('gulp'),
	gutil = require('gulp-util'),
	shell = require('gulp-shell'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename');

var paths = {
	img: './img/**',
	imgOut: './img',
	js: './js',
};

// Concate .js
gulp.task('js', function() {
	return gulp.src(paths.js + '/core/*')
		.pipe(concat('all.js'))
		.pipe(gulp.dest(paths.js));
});

// uglify on deploy
gulp.task('uglify', function() {
	return gulp.src(paths.js + '/all.js')
		.pipe(uglify())
		.pipe(rename('all.js'))
		.pipe(gulp.dest(paths.js));
});

gulp.task('watch', [ 'js' ], function() {
	gulp.watch(paths.less + '/*', ['css']);
	gulp.watch(paths.js + '/core/*', ['js']);
});


// $ gulp
gulp.task('deploy', ['js', 'uglify'], function() {
	gulp.run('minify');
});
