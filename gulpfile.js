'use strict';

var path = require('path'),
	gulp  = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-minify-css'),
	shell = require('gulp-shell'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin');

var paths = {
	img: './img/**',
	imgOut: './img',
	js: './js',
	less: './less',
	css: './css'
}

// Compile .less to .css
gulp.task('css', function() {
	return gulp.src(paths.less + '/main.less')
		.pipe(less())
			.on('error', gutil.beep)
			.on('error', function(err) {
				gutil.log(err.message);
			})

		.pipe(rename('style.css'))
		.pipe(gulp.dest(paths.css));
});

gulp.task('minify', function() {
	return gulp.src(paths.css + '/style.css')
		.pipe(minifyCSS({ keepSpecialComments: 0 }))
		.pipe(rename('style.css'))
		.pipe(gulp.dest(paths.css));
});

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


gulp.task('images', function () {
	return gulp.src(paths.img)
		.pipe(imagemin({ optimizationLevel: 7 }))
		.pipe(gulp.dest(paths.imgOut));
});

gulp.task('watch', [ 'css', 'js' ], function() {
	gulp.watch(paths.less + '/*', ['css']);
	gulp.watch(paths.js + '/core/*', ['js']);
	// gulp.watch(paths.images, ['images']);
});


// $ gulp
gulp.task('deploy', ['css', 'js', 'uglify'], function() {
	gulp.run('minify');
});
