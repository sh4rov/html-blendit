import { src, dest } from 'gulp'
import debug from 'gulp-debug'
import inject from 'gulp-inject'
import path from 'path'
import prettier from 'gulp-prettier'

import svgmin from 'gulp-svgmin'
import svgstore from 'gulp-svgstore'

import paths from '../paths'

// let svgminConfig = function getOptions (file) {
//   let prefix = path.basename(file.relative, path.extname(file.relative));
//   return {
//     plugins: [{
//       cleanupIDs: {
//         prefix: prefix + '-',
//         minify: true
//       }
//     }]
//   }
// }

let svgSprite = () => {
  const svgs = src('./src/**/*.svg')
    .pipe(svgstore({ inlineSvg: true }));

  function fileContents (filePath, file) {
    return file.contents.toString();
  }

  return src('./src/layout/_layout-header.html')
    .pipe(inject(svgs, { transform: fileContents }))
    .pipe(debug({
      title: 'debug:'
    }))
    .pipe(dest('./src/layout'))
}

module.exports = svgSprite