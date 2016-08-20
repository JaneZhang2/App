new AppModule()
  .group('app.business.returns.controller')
  .require([])
  .type('controller')
  .name('ReturnsCtrl')
  .params(['$scope', 'AppHttpService'])
  .action(function ($scope, AppHttpService) {

    $scope.form = {};

    $scope.search = function () {
      AppHttpService.send({
        url: 'sral',
        params: {
          customername: $scope.form.customername,
          ordertime: $scope.form.ordertime,
          ikea_order_no: $scope.form.ikea_order_no
        },
        onSuccess: function (data) {
          $scope.items = data.list;
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
