fis.set('project.files', ['*.html', '*.js']);
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
  globalAsyncAsSync: false,
  baseUrl: 'src/widget/js',
  paths: {
    api: 'api',
    common: 'common',
    index1: 'page1/index',
    index2: 'page2/index'
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

fis.match('src/page/(**.html)', {
  release: '$1'
})

fis.media('prod').match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    allInOne: {
      js: function (file) {
        return '/static/js/' + file.filename + '_' + file.getHash() + '.js'
      },
      css: function (file) {
        return '/static/css/' + file.filename + '_' + file.getHash() + '.css'
      },
      includeAsyncs: true
    },
    obtainScript: false,
    obtainStyle: false,
    useInlineMap: true
  })
}).match('src/widget/js/*.js', {
  packTo: '/static/js/common.js'
}).match('{src/widget/**,/static/js/common}.js', {
  useHash: true,
  optimizer: fis.plugin('uglify-js')
}).match('src/widget/**.js', {
  release: '/static/js/$1'
}).match('**.scss', {
  optimizer: fis.plugin('clean-css'),
  useHash: true
}).match('::image', {
  useHash: true
}).match('src/page/(**.html)', {
  optimizer: fis.plugin('html-minifier', {
    removeComments: true,
    collapseWhitespace: true,
    removeEmptyAttributes: true,
    minifyJS: true,
    minifyCSS: true
  })
})
