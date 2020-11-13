import { src, dest, watch, series, paraller } from 'gulp'

import sass from 'gulp-sass'
import debug from 'gulp-debug'
import newer from 'gulp-newer'
import htmlmin from 'gulp-htmlmin'
import fileinclude from 'gulp-file-include'

// import tasks
import html from './tasks/html'
import styles from './tasks/styles'
import serve from './tasks/serve'

export { html, styles }

export default serve