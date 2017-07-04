require([
  'https://cdn.bootcss.com/handlebars.js/3.0.0/handlebars.min.js',
  'http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js',
  'https://cdn.bootcss.com/es5-shim/4.5.8/es5-shim.min.js',
  'https://cdn.bootcss.com/es5-shim/4.5.8/es5-sham.min.js',
], function (Handlebars) {
  window.Handlebars = Handlebars
  require([
    'http://cdn.bootcss.com/bootstrap/2.3.2/js/bootstrap.min.js',
  ], function () {
    let pathname = window.location.pathname
    let pagename = pathname.substring(pathname.lastIndexOf('\/') + 1, pathname.indexOf('\.html'))
    console.log(pagename)
    let routers = {
      'page1': () => {
        // fis sync
        require(['index1'])
      },
      'page2': () => {
        // fis sync
        require(['index2'])
      }
    }
    routers[pagename]()
  })
})