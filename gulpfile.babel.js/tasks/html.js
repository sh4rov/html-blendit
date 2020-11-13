import fileinclude from "gulp-file-include";
import { src, dest, series, parallel } from "gulp";
import debug from 'gulp-debug';
import prettier from 'gulp-prettier'
import del from 'del';

import paths from '../paths'

let html = () => {
  return src(paths.views.src)
    .pipe(debug())
    .pipe(fileinclude())
    .pipe(prettier({ singleQuote: true }))
    .pipe(dest(paths.views.dest))
}

module.exports = html