new AppModule()
  .group('app.business.services.controller')
  .require([])
  .type('controller')
  .name('ServicesCtrl')
  .params(['$scope'])
  .action(function ($scope) {

    $scope.settings = {
      enableFriends: true
    };

  })
  .build();
