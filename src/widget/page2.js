require(['api', 'common',
  'https://cdn.bootcss.com/handlebars.js/3.0.0/handlebars.min.js',
  'https://cdn.bootcss.com/jquery/1.12.4/jquery.min.js',
  'https://cdn.bootcss.com/es5-shim/4.5.8/es5-shim.min.js',
  'https://cdn.bootcss.com/es5-shim/4.5.8/es5-sham.min.js'],
  function (api, common, Handlebars) {
    console.log(api.a)
    var template = __inline('tpls/page2.handlebars');
    let pageText = 'page2'
    var html = template({
      text: `this is ${pageText}!!!`
    })
    $('#container').html(html)
    $('#btn').on('click', function () {
      common.jumpTo('/page/page1.html')
    })
  })