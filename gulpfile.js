var gulp        = require('gulp');
var browserify = require('browserify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babel = require('babelify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// process JS files and return the stream.
gulp.task('js', function () {
    var bundler = browserify('./src/index.js', { debug: true }).transform(babel);
    return bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('concat-styles',['sass'], function() {
  return gulp.src('./.tmp/**.css')
    .pipe(sourcemaps.init())
      .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  return gulp.src('./styles/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./.tmp'));
});

gulp.task('sass-watch', ['concat-styles'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js','sass'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/*.js", ['js-watch']);
    gulp.watch("styles/*.scss", ['sass-watch']);
    gulp.watch("*.html", function () {
      browserSync.reload();
  });
});

gulp.task('default',['js','concat-styles']);