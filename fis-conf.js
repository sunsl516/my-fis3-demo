fis.set('project.files', ['*.html']);

fis.hook('amd')

fis.match('comp/**.es', {
  isMod: true,
  parser: fis.plugin('babel-5.x'),
  rExt: 'js'
})

fis.match('comp/**.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass')
})

fis.match('*.{es,css,scss}', {
  useHash: true
})

fis.match('static/**.js', {
  useHash: false
})

fis.match(':image', {
  useHash: true
})

fis.match('::package', {
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    useInlineMap: true,
    obtainScript: true
  })
})

fis.match('*.html', {
  optimizer: fis.plugin('html-minifier', {
    removeComments: true,
    collapseWhitespace: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true
  })
})

fis.match('comp/**.handlebars', {
  rExt: '.js',
  parser: fis.plugin('handlebars-3.x', {
  }),
  release: false
});

fis.media('prod').match('::package', {
  postpackager: fis.plugin('loader', {
    allInOne: {
      css: '/static/aio-${hash}.css',
      js: '/static/aio-${hash}.js',
      includeAsyncs: true
    }
  }),
  spriter: fis.plugin('csssprites')
}).match('comp/**.scss', {
  optimizer: fis.plugin('clean-css'),
  useSprite: true
}).match('static/**.js', {
  optimizer: fis.plugin('uglify-js')
}).match('comp/**.es', {
  optimizer: fis.plugin('uglify-js')
}).match('*.png', {
  optimizer: fis.plugin('png-compressor')
})
