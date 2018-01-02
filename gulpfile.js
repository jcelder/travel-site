const gulp = require('gulp')
const watch = require('gulp-watch')
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssvars = require('postcss-simple-vars')
const nested = require('postcss-nested')

gulp.task('default', () => {
  console.log('Gulp is running!')
})

gulp.task('html', () => {
  console.log('HTML Tasks Run Here')
})

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html')
  })
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles')
  })
})
