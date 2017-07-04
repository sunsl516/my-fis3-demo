/**
 * @require ../../sass/page2.scss
 */
define(['api', 'common'], function (api, common) {
  console.log(api.a)
  var template = __inline('page2.handlebars');
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
    common.jumpTo(__uri('/src/page/page1.html'))
  })
})