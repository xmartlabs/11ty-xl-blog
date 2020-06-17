const gulp = require("gulp");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

const { parallel, series, watch } = require('gulp');
const del = require('del');

function clean() {
   return del([ '_site' ]);
}

exports.clean = clean;

function scss_to_css() {
  // place code for your default task here
  return gulp
    .src("./css/**/*.scss")
    .pipe(sass())
    // .pipe(autoprefixer())
    // .pipe(cssnano())
    .on("error", sass.logError)
    .pipe(gulp.dest("./css"));
}

exports.scss_to_css = scss_to_css;


function watch_scss() {
  watch("./css/**/*.scss", scss_to_css);
};

exports.watch_scss = watch_scss;

exports.build_scss = scss_to_css;
