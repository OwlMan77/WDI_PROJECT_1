const gulp  = require('gulp');
const babel = require('gulp-babel');


gulp.task('es6',() => {
  return gulp.src('src/app.js')
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('default', () => {
  gulp.watch('src/app.js', ['es6']);
});
