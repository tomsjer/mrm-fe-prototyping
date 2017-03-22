const gulp = require('gulp');
const browserify = require('browserify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babel = require('babelify');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// process JS files and return the stream.
gulp.task('js', () =>{
  const bundler = browserify('./src/index.js', { debug: true }).transform(babel);
  return bundler.bundle()
    .on('error', (err)=>{
      console.error(err);
      this.emit('end');
    })
    .pipe(source('build.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
});

// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], (done)=>{
  browserSync.reload();
  done();
});

gulp.task('concat-styles', ['sass'], ()=>{
  return gulp.src('./.tmp/**.css')
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', ()=>{
  return gulp.src('./styles/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./.tmp'));
});

gulp.task('sass-watch', ['concat-styles'], (done)=>{
  browserSync.reload();
  done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'sass'], ()=>{

  // Serve files from the root of this project
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  // add browserSync.reload to the tasks array to make
  // all browsers reload after tasks are complete.
  gulp.watch('src/*.js', ['js-watch']);
  gulp.watch('styles/*.scss', ['sass-watch']);
  gulp.watch('*.html', ()=>{
    browserSync.reload();
  });
});

gulp.task('default', ['js', 'concat-styles']);
