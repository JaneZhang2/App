new AppModule()
    .group('app.business.account.controller')
    .require([])
    .type('controller')
    .name('AccountCtrl')
    .params(['$scope'])
    .action(function ($scope) {

        $scope.settings = {
            enableFriends: true
        };

    })
    .build();