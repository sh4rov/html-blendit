import { src, dest } from 'gulp'
import debug from 'gulp-debug'
import plumber from 'gulp-plumber'
import paths from '../paths'

let copyFonts = () => {
  return src(paths.fonts.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(dest(paths.fonts.dest))
}

module.exports = copyFonts