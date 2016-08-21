/*
 * 创建人：章剑飞
 * 创建原因：主页路由
 * 创建时间：2016年05月18日15:27:17
 *
 * */
var LOGIN_ROUTER = {
  //消息路由
  login: {
    url: "/login",
    views: {
      "main_view": {
        templateUrl: 'business/login/index.html',
        controller: 'LoginCtrl'
      }
    }
  }
};
