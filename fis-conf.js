fis.set('project.files', ['*.html', '*.js', '*.scss']);
fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'dist/**']);

fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

fis.match('{comp/**, router, main}.js', {
  parser: fis.plugin('babel-5.x'),
  useHash: true
})

fis.match('sass/*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass'),
  packTo: 'main.css',
  useSprite: true
})

fis.match('reset.scss', {
  packOrder: -100
})

fis.match('comp/**.handlebars', {
  rExt: '.js',
  parser: fis.plugin('handlebars-3.x', {
  }),
  release: false
});

fis.media('prod').match('{comp/**, router, main}.js', {
  useHash: true,
  optimizer: fis.plugin('uglify-js')
}).match('sass/*.scss', {
  optimizer: fis.plugin('clean-css')
}).match('::image', {
  useHash: true
}).match('*.html', {
  optimizer: fis.plugin('html-minifier', {
    removeComments: true,
    collapseWhitespace: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true
  })
})