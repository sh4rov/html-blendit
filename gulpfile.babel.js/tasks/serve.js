import { series, watch } from 'gulp'
import bs from 'browser-sync'

import html from './html'
import styles from './styles'

import paths from '../paths'

let serve = () => {
  bs.init({
    server: './dist',
    open: false,
    notify: false,
  })

  watch(paths.views.watch, html).on('change', bs.reload)
  watch(paths.styles.watch, styles).on('change', bs.reload)
}

module.exports = serve