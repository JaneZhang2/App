new AppModule()
  .group('app.business.customers.controller')
  .require([])
  .type('controller')
  .name('CustomersCtrl')
  .params(['$scope'])
  .action(function ($scope) {

    $scope.settings = {
      enableFriends: true
    };

  })
  .build();
