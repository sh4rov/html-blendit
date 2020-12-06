import del from 'del'
import paths from '../paths'

let clean = () => del(paths.dest)

module.exports = clean;