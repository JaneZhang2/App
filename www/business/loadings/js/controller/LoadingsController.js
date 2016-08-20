new AppModule()
  .group('app.business.loadings.controller')
  .require([])
  .type('controller')
  .name('LoadingsCtrl')
  .params(['$scope', 'AppHttpService'])
  .action(function ($scope, AppHttpService) {

    $scope.form = {};

    $scope.search = function () {
      AppHttpService.send({
        url: 'ssc',
        params: {
          customername: $scope.form.customername,
          delivery_type: '',
          ikea_order_no: $scope.form.ikea_order_no,
          receiver_name: 'new',
          receiver_tel: $scope.items.receiver_tel,
          delivery_time_from: '',
          sch_consign_datetime: ''
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
