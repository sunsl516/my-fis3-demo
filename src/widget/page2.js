require(['api', 'common', './js/page2/test.js'],
  function (api, common) {
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