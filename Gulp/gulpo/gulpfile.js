//  Require Gulp into file and define the variable
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
//  Run the example task, if installed correctly and "gulp talktome" is ran, "Hello From Zestcode" should be printed in the logs
gulp.task('styles', function() {
	gulp.src('*.css')
	 .pipe(autoprefixer())
	 .pipe(gulp.dest('build'))
});