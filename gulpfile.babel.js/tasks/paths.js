const srcFolder = "./src";
const destFolder = "./dist";


const paths = {
  views: {
    src: srcFolder + "/**/[^_]*.html",
    dest: destFolder,
    watch: srcFolder + "/**/*.html",
  },
};