import { src, dest } from "gulp";
import fileinclude from "gulp-file-include";
import prettier from 'gulp-prettier'
import newer from 'gulp-newer'
// import headerfooter from 'gulp-headerfooter'
import debug from 'gulp-debug'
import plumber from 'gulp-plumber'
// import fs from 'fs'

import paths from '../paths'

// let headerPath = fs.readFileSync('./src/layout/_layout-header.html')
// let footerPath = fs.readFileSync('./src/layout/_layout-footer.html')
let newerSrc = paths.views.watch

let html = () => {
  return src(paths.views.src)
    .pipe(plumber())
    .pipe(debug())
    .pipe(newer(newerSrc))
    // .pipe(headerfooter.header(headerPath))
    // .pipe(headerfooter.footer(footerPath))
    .pipe(fileinclude())
    .pipe(prettier({ singleQuote: true }))
    .pipe(dest(paths.views.dest))
}

module.exports = html