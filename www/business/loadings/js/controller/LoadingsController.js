new AppModule()
  .group('app.business.loadings.controller')
  .require([])
  .type('controller')
  .name('LoadingsCtrl')
  .params(['$scope'])
  .action(function ($scope) {

    $scope.settings = {
      enableFriends: true
    };

  })
  .build();
