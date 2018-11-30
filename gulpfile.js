// Dependencies

const gulp = require('gulp'),
      gulpBabel = require('gulp-babel'),
      gulpSass = require('gulp-sass'),
      gulpSourceMaps = require('gulp-sourcemaps'),
      gulpRename = require('gulp-rename'),
      gulpCleanCss = require('gulp-clean-css'),
      browserSync = require('browser-sync').create()
    ;
const BASE_DIR = './app/';

// Tasks - List
  gulp.task('default', ['styles', 'watch', 'browser-sync']);
  gulp.task('styles', _task_styles);
  gulp.task('watch', _task_watch);
  gulp.task('browser-sync', _task_browserSync);

// Tasks - Functions
  function _task_styles() {
    return gulp.src(BASE_DIR + 'app.scss')
      .pipe(gulpSourceMaps.init())
      .pipe(gulpSass().on('error', gulpSass.logError))
      .pipe(gulpCleanCss())
      .pipe(gulpSourceMaps.write())
      .pipe(gulpRename('el-baraton.css'))
      .pipe(gulp.dest(BASE_DIR + 'assets/styles/'))
      .pipe(browserSync.stream())
    ;
  }

  function _task_browserSync() {
    browserSync.init({
      server: BASE_DIR
    });
  }
  
  function _task_watch() {
    gulp.watch(BASE_DIR + '**/*.scss', ['styles']);
    gulp.watch('./*.html').on('change', browserSync.reload);
  }