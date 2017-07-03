define(['api'], function (api) {
    var controller = function (name) {
        var template = __inline('module2.handlebars');
        var html = template({
            name: name ? name : 'vivi'
        })

        appView.html(html);

        $('button').on('click', function () {
            alert('hello');
        });

        controller.onRouteChange = function () {
            console.log('change');      //可以做一些销毁工作，例如取消事件绑定
            $('button').off('click');   //解除所有click事件监听
        };
        console.log(api.a)
    };
    return controller;
});