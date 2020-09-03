const gulp = require("gulp");
const { dest } = require("gulp");
const sass = require("gulp-sass");
const html = require("gulp-htmlmin");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel");
sass.compiler = require("node-sass");

const compilerSass = () => {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("src/css"))
    .pipe(dest("dist/css"));
};

const htmlMIn = () => {
  return gulp
    .src("src/index.html")
    .pipe(html({ collapseWhitespace: true }))
    .pipe(dest("dist"));
};
const compilerJs = () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
};
const watch = () => {
  gulp.watch("src/scss/**/*.scss", compilerSass);
  gulp.watch("src/index.html", htmlMIn);
  gulp.watch("src/js/**/*.js", compilerJs);
};

gulp.task("default", watch);
