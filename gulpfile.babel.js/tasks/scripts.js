import { src, dest } from 'gulp'
import plumber from 'gulp-plumber'
import debug from 'gulp-debug'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import eslint from 'gulp-eslint'
import terser from 'gulp-terser'

const paths = require('../paths')

let scripts = () => {
  return src([
    paths.scripts.src,
    paths.scripts.modules
  ], {
    sourcemaps: 'true',
  })
    .pipe(plumber())
    .pipe(debug())
    .pipe(babel())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(dest(paths.scripts.dest))
    .pipe(terser())
    .pipe(concat('main.min.js'))
    .pipe(dest(paths.scripts.dest), {
      sourcemaps: './maps'
    })
}

module.exports = scripts;