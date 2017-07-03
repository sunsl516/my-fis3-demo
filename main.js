/**
 * Created by louis.sun on 2017/6/30.
 */

'use strict';

(function (win) {
  var apiPath = __uri('comp/common/api.js')
  var config = {
    paths: {                    //如果某个前缀的依赖不是按照baseUrl拼接这么简单，就需要在这里指出
      director: 'libs/director',
      api: apiPath.substring(0, apiPath.indexOf('.js'))
    },
    shim: {                     //引入没有使用requirejs模块写法的类库。
      director: {
        exports: 'Router'
      }
    }
  }

  require.config(config);
  require([__uri('router.js')], function (router) {
    win.appView = $('#container');      //用于各个模块控制视图变化
    router.init();                      //开始监控url变化
    router.setRoute('module1')
  });


})(window);
