const gulp = require('gulp')
const watch = require('gulp-watch')

gulp.task('default', () => {
  console.log('Gulp is running!')
})

gulp.task('html', () => {
  console.log('HTML Tasks Run Here')
})

gulp.task('styles', () => {
  console.log('Sass or PostCSS Tasks Run Here')
})

gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html')
  })
  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles')
  })
})
