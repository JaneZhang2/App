new AppModule()
  .group('app.business.customers.controller')
  .require([])
  .type('controller')
  .name('CustomersCtrl')
  .params(['$scope', 'AppHttpService', 'AppCacheService'])
  .action(function ($scope, AppHttpService, AppCacheService) {

    $scope.form = {};

    $scope.search = function () {

      if (!$scope.form.ikea_order_no) {
        return alert("请扫描单号");
      }

      AppHttpService.send({
        url: 'ssc',
        params: {
          sessionid: AppCacheService.getStorageCache('sessionid'),
          customername: $scope.form.customername,
          delivery_type: '',
          ikea_order_no: $scope.form.ikea_order_no
        },
        onSuccess: function (data) {
          if (data.selectflag == '1') {
            $scope.items = data.list;
          }
        },
        onError: function () {

        }
      });
    };

    $scope.reset = function () {
      $scope.form = {};
    }
  })
  .build();
