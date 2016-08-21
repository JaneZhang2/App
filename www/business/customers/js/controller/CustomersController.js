new AppModule()
  .group('app.business.customers.controller')
  .require([])
  .type('controller')
  .name('CustomersCtrl')
  .params(['$scope', 'AppHttpService'])
  .action(function ($scope, AppHttpService) {

    $scope.form = {};

    $scope.search = function () {

      if (!$scope.form.ikea_order_no) {
        return alert("请扫描单号");
      }

      AppHttpService.send({//http://10.8.4.73:48090/myscm/select10cargoload?a=a
        url: 'ssc',
        params: {
          sessionid: '',
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
