import { series, parallel } from 'gulp'

// import tasks
import html from './tasks/html'
import styles from './tasks/styles'
import serve from './tasks/serve'
import js from './tasks/scripts'
import clean from './tasks/clean'

export { html, styles, serve, js, clean }
export default serve

// Build static files
export const staticFiles = parallel(html, styles, js)

// prod
export const b = series(staticFiles, serve)