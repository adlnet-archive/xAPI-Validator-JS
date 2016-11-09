'use strict';

/* Libraries */
let
  browserify  = require('browserify'),
  buffer      = require('vinyl-buffer'),
  connect     = require('gulp-connect'),
  gulp        = require('gulp'),
  livereload  = require('gulp-livereload'),
  source      = require('vinyl-source-stream'),
  sourcemaps  = require('gulp-sourcemaps'),
  uglify      = require('gulp-uglify')
;

/* Config */
const
  BABEL_CONFIG = Object.freeze({
    presets: ['es2015']
  }),
  BROWSERIFY_TRANSFORM = 'babelify',
  BROWSERIFY_CONFIG = Object.freeze({
    debug: true,
    json: true,
    standalone: 'beep-boop'
  }),
  DIST_FILENAME      = 'xapiValidator.js',
  DIST_FILENAME_MIN  = 'xapiValidator.min.js',
  DIST_PATH          = 'lib',
  MAPS_PATH          = './maps',
  SRC_FILE           = 'src/xAPI-validator.js',
  WATCH_FILES        = ['src/*.js', 'constants/*.js', 'spec/*.js', 'spec/lib/*.js']
;

/* Task Config */

const
  BUILD_TASK       = 'build',
  BUILD_PROD_TASK  = 'build-prod-task',
  CONNECT_TASK     = 'connect',
  DEFAULT_TASK     = 'default',
  DEFAULT_TASKS    = [BUILD_TASK, BUILD_PROD_TASK],
  WATCH_TASK       = 'watch',
  WATCH_TASKS      = [BUILD_TASK]
;

gulp.task(BUILD_TASK, () => {
  return browserify(SRC_FILE, BROWSERIFY_CONFIG)
    .transform(BROWSERIFY_TRANSFORM, BABEL_CONFIG)
    .bundle()
    .pipe(source(DIST_FILENAME))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

gulp.task(BUILD_PROD_TASK, () => {
  return browserify(SRC_FILE, BROWSERIFY_CONFIG)
    .transform(BROWSERIFY_TRANSFORM, BABEL_CONFIG)
    .bundle()
    .pipe(source(DIST_FILENAME_MIN))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write(MAPS_PATH))
    .pipe(gulp.dest(DIST_PATH))
    .pipe(livereload());
});

gulp.task(WATCH_TASK, WATCH_TASKS, () => {
  livereload.listen();
  connect.server();
  gulp.watch(WATCH_FILES, WATCH_TASKS);
});

gulp.task(CONNECT_TASK, () => {
  connect.server();
});

gulp.task(DEFAULT_TASK, DEFAULT_TASKS);
