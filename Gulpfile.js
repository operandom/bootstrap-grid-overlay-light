var gulp   = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename')
;

console.log(pkg);


gulp.task('build', function () {
	return gulp.src('src/bgol.js')
		.pipe(uglify({

		}))
		.pipe(rename('bgol.min.js'))
		.pipe(gulp.dest('build'))
	;
});