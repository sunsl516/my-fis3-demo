fis.set('project.files', ['*.html']);
fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'dist/**']);

fis.match('::package', {
  spriter: fis.plugin('csssprites'),
  postpackager: fis.plugin('loader', {
    resourceType: 'amd',
    allInOne: true,
    obtainScript: false,
    useInlineMap: true
  })
})

fis.match('src/(**)', {
  release: '/$1'
})

fis.hook('amd', {
  paths: {
    api: 'src/widget/js/api',
    common: 'src/widget/js/common'
  }
})

fis.match('src/widget/js/*.js', {
  isMod: true,
  // packTo: '/static/common.js'
})

// var pages = ['page1', 'page2']
// for (var i = 0; i < pages.length; i++) {
//   fis.match('src/widget/js/*.js', {
//     isMod: true,
//     packTo: '/static/common.js'
//   })
// }

fis.match('src/widget/**.js', {
  parser: fis.plugin('babel-5.x')
})

fis.match('src/widget/sass/*.scss', {
  rExt: '.css',
  parser: fis.plugin('node-sass'),
  useSprite: true
})

fis.match('src/widget/tpls/**.handlebars', {
  rExt: '.js',
  parser: fis.plugin('handlebars-3.x', {
  }),
  release: false
}, true);

// fis.media('prod').match('::packager', {
//   postpackager: fis.plugin('loader', {
//     resourceType: 'amd',
//     allInOne: {
//       js: function (file) {
//         return file.filename + "_aio.js";
//       },
//       css: function (file) {
//         return file.filename + "_aio.css";
//       }
//     },
//     useTrack: false,
//     obtainScript: false,
//     useInlineMap: true
//   })
// }).match('src/(**)', {
//   release: '/$1'
// }).match('src/widget/**.js', {
//   // useHash: true,
//   // optimizer: fis.plugin('uglify-js')
// }).match('src/widget/**.scss', {
//   // optimizer: fis.plugin('clean-css'),
//   // useHash: true
// }).match('::image', {
//   useHash: true
// }).match('*.html', {
//   // optimizer: fis.plugin('html-minifier', {
//   //   removeComments: true,
//   //   collapseWhitespace: true,
//   //   removeEmptyAttributes: true,
//   //   minifyJS: true,
//   //   minifyCSS: true
//   // })
// })
