import { series, parallel } from 'gulp'

// import tasks
import html from './tasks/html'
import styles from './tasks/styles'
import serve from './tasks/serve'
import js from './tasks/scripts'
import clean from './tasks/clean'
import copyFonts from './tasks/fonts'
import svgSprite from './tasks/svg-sprite'

export { html, styles, serve, js, clean, copyFonts, svgSprite }
export default serve

// Build static files
export const staticFiles = series(html, svgSprite, styles, js)

// prod
export const b = series(clean, staticFiles, serve)