//@require sass/page2.scss
require(['api', 'common', './js/page2/test.js'],
  function (api, common) {
    console.log(api.a)
    var template = __inline('./js/page2/page2.handlebars');
    let pageText = 'page2'
    var html = template({
      text: `this is ${pageText}!!!`
    })
    $('.container').html(html)
    $('[data-toggle="popover"]').popover({
      trigger: 'click'
    })
    $('#myModal').modal('hide')
    $('#btn').on('click', function () {
      common.jumpTo('/page/page1.html')
    })
  })