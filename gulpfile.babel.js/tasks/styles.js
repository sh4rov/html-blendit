import { src, dest } from 'gulp'
import sass from 'gulp-sass'
import autuprefixer from 'gulp-autoprefixer'
import debug from 'gulp-debug'
import plumber from 'gulp-plumber'
import newer from 'gulp-newer'

import paths from '../paths'

const newerPath = paths.styles.src

let styles = () => {
  return src(paths.styles.src, { sourcemaps: true })
    .pipe(plumber())
    .pipe(newer(newerPath))
    .pipe(debug())
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error', sass.logError)
    )
    .pipe(autuprefixer())
    .pipe(dest(paths.styles.dest), { sourcemaps: '.' })
}

module.exports = styles;