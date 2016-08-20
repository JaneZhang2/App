new AppModule()
  .group('app.business.returns.controller')
  .require([])
  .type('controller')
  .name('ReturnsCtrl')
  .params(['$scope'])
  .action(function ($scope) {

    $scope.settings = {
      enableFriends: true
    };

  })
  .build();
