define(function () {
    var template = __inline('module1.handlebars');
    let a = 'handlebars'
    var html = template({
        text: `this is a ${a} test!!!`
    })

    var controller = function () {
        appView.html(html);
    };
    return controller;
});