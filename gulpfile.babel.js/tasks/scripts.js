import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'

const paths = require('../paths')

let scripts = () => {
  return src(paths.scripts.src, {
    sourcemaps: 'true',
  })
    .pipe(plumber())
    .pipe(debgu())
    .pipe(dest(paths.scripts.dest))
}

module.exports = scripts;