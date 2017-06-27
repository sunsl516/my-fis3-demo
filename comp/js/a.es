/**
 * @require ../sass/a.scss
 */
define(['b.es', 'c.es'], function (b, c) {
  var template = __inline('../hds/test.handlebars');
  let a = 'handlebars'
  var content = template({
    title: 'fis3',
    content: `this is a ${a} test!!!`
  })

  return {
    html: content
  }
})