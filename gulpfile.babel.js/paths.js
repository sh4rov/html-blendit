module.exports = {

  src: './src',
  dest: './dist',

  views: {
    src: './src/**/[^_]*.html',
    dest: './dist',
    watch: './src/**/*.html',
  },
  styles: {
    src: './src/styles/*.scss',
    dest:  './dist/css',
    watch: [
      "./src/styles/**/*.scss",
      "./src/modules/**/*.scss",
      "./src/components/**/*.scss",
    ],
  },
  
  scripts: {
    src: './src/js/**/*.js',
    modules: './src/modules/**/*.js',
    dest: './dist/js',

    watch: [
      './src/js/**/*.js',
      './src/modules/**/*.js',
      './src/components/**/*.js'
    ]
  },

  fonts: {
    src: './src/fonts/**/*.{ttf,woff,woff2}',
    dest: './dist/fonts'
  },
  
  svg: {
    src: './src/img/svg',
    dest: './dist/img'
  }
}
