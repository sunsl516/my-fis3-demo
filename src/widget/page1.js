require(['api', 'common', './js/page1/test.js'],
  function (api, common) {
    console.log('12345678')
    var template = __inline('tpls/page1.handlebars');
    let pageText = 'page1'
    var html = template({
      text: `this is ${pageText}!!!`
    })
    $('#container').html(html)
    $('#btn').on('click', function () {
      common.jumpTo('/page/page2.html')
    })
  })