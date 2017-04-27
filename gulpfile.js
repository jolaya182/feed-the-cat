const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  notify = require('gulp-notify'),
  sass = require('gulp-sass')

gulp.task('bs', () => {
  browserSync.init({
    server: {
      baseDir: './src',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
        left: '0',
        margin: '0px',
        padding: '5px',
        position: 'fixed',
        fontSize: '15px',
        zIndex: '9999',
        borderRadius: '5px 0px 0px',
        color: 'white',
        textAlign: 'center',
        display: 'block',
        backgroundColor: 'rgba(60, 197, 31, 0.498039)',
      },
    },
    // middleware: [historyApiFallback()],
    browser: 'google chrome',
  });
});


gulp.task('sass', () => gulp.src('src/scss/main.scss')
        .pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('src/css'))
        .pipe(reload({
          stream: true,
        })));


gulp.task('default', ['bs', 'sass'], () => {
  gulp.watch('src/scss/*.scss', ['sass']);
  gulp.watch('src/index.html', reload);
  gulp.watch('src/css/main.css', reload);
  gulp.watch('src/css/styles.css', reload);
})
