const gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	gutil = require('gulp-util');
    path = './wp-content/themes/Elevated';

const paths = {
	js: [path + '/js/actucall.js'],
	css: [path + '/sass/**/*.scss'],
	//img: ['img/*.svg', 'img/*.png', 'img/*.jpg'],
	vendor: ['vendor/jquery.js',
			'vendor/TweenMax.min.js',
			'vendor/MorphSVGPlugin.min.js',
			'vendor/DrawSVGPlugin.min.js',
			'vendor/slick.min.js']
}

gulp.task('sass', function() {
  return gulp.src(path + '/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path));
});

gulp.task('js', function(){
	gulp.src(paths.js)
	.pipe(sourcemaps.init())
		.pipe(babel({ presets: ['es2015'] }))
		.on('error', gutil.log)
		.pipe(concat('app.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest(path));
});

gulp.task('watch', function() {
  	gulp.watch(paths.js, ['js']);
  	gulp.watch(paths.css, ['sass']);
});


gulp.task('vendor', function(){
	gulp.src(paths.vendor)
		.pipe(gulp.dest('dist/www-content/web-apps/indigo-slate/vendor'))
});

gulp.task('default', ['watch']);
//gulp.task('build', ['templates','vendor']);
