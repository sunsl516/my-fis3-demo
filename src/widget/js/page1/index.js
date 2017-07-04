/**
 * @require ../../sass/page1.scss
 */
define(['api', 'common', 'test.js'], function (api, common, test) {
  console.log('12345678')
  var template = __inline('page1.handlebars');
  let pageText = 'page1'
  var html = template({
    text: `this is ${pageText}!!!`
  })
  $('.container').html(html)
  $('#btn').on('click', function () {
    common.jumpTo(__uri('/src//page/page2.html'))
  })
})