var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");

// Run jsHint
gulp.task('hint', function() {
  return gulp.src('source-files/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('compiled-site/pretty/scripts'));
});

// Minify JavaScript
gulp.task('uglify', function() {
  return gulp.src('source-files/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('compiled-site/ugly/scripts'));
});


// Compile Jade to pretty HTML
gulp.task('jade-pretty', function() {
  return gulp.src('source-files/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('compiled-site/pretty'));
});

// Compile Jade to ugly HTML
gulp.task('jade-ugly', function() {
  return gulp.src('source-files/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('compiled-site/ugly'));
});


// Compile Stylus to prefixed and pretty CSS
gulp.task('stylus-pretty', function() {
  return gulp.src('source-files/styles/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('compiled-site/pretty/styles'));
});

// Compile Stylus to prefixed and ugly CSS
gulp.task('stylus', function() {
  return gulp.src('source-files/styles/*.styl')
    .pipe(stylus({set: ['compress']}))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('compiled-site/ugly/styles'));
});


// Watch files for changes
gulp.task('watch', function() {
  gulp.watch('source-files/scripts/*.js', ['hint', 'uglify']);
  gulp.watch('source-files/*.jade', ['jade-pretty']);
  gulp.watch('source-files/_*.jade', ['jade-pretty']);
  gulp.watch('source-files/styles/*.styl', ['stylus-pretty']);
});



// The mega-task that runs when you type 'gulp' at the command line
gulp.task('default', function(){
  gulp.start('hint', 'uglify', 'jade-pretty', 'jade-ugly', 'stylus', 'stylus-pretty', 'watch');
});
