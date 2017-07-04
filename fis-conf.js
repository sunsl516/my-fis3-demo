fis.set('project.files', ['*.html']);
fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'dist/**']);

fis.match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    obtainScript: false,
    obtainStyle: false,
    useInlineMap: true
  })
})

fis.match('src/(**)', {
  release: '/$1'
})

fis.hook('amd', {
  baseUrl: 'src/widget/js',
  paths: {
    api: 'api',
    common: 'common'
  }
})

fis.match('src/widget/js/*.js', {
  isMod: true
})

fis.match('src/widget/**.js', {
  parser: fis.plugin('babel-5.x')
})

fis.match('src/widget/sass/*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass'),
  useSprite: true
})

fis.match('src/widget/**.handlebars', {
  rExt: '.js',
  parser: fis.plugin('handlebars-3.x', {
  }),
  release: false
}, true);

fis.media('prod').match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    allInOne: {
      js: function (file) {
        return '/static/' + file.filename + '_' + file.getHash() + '.js'
      },
      css: function (file) {
        return '/static/' + file.filename + '_' + file.getHash() + '.js'
      },
      includeAsyncs: true
    },
    obtainScript: false,
    useInlineMap: true
  })
}).match('src/widget/js/*.js', {
  packTo: '/static/common.js'
}).match('{src/widget/**,/static/common}.js', {
  useHash: true,
  optimizer: fis.plugin('uglify-js')
}).match('**.scss', {
  optimizer: fis.plugin('clean-css'),
  useHash: true
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
