var CUSTOMERS_ROUTER = {
  //"客户签收"路由
  customers: {
    url: '/customers',
    views: {
      'main_view': {
        templateUrl: 'business/customers/index.html',
        controller: 'CustomersCtrl'
      }
    }
  }
};
