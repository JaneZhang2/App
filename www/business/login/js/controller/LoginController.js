new AppModule()
  .group('app.business.login.controller')
  .require([])
  .type('controller')
  .name('LoginCtrl')
  .params(['$scope', 'AppHttpService', 'AppCacheService', '$state'])
  .action(function ($scope, AppHttpService, AppCacheService, $state) {

    $state.go('customers_tab');

    $scope.form = {};

    $scope.submit = function () {
      AppHttpService.send({
        url: 'login',
        type: 'post',
        params: {
          username: $scope.form.username,
          password: $scope.form.password,
          orgcode: $scope.form.orgcode,
          rolecode: $scope.form.rolecode,
          clientid: '0000000001'
        },
        onSuccess: function (data) {
          switch (data.retcode) {
            case '0':
              alert('账号密码错误');
              break;
            case '1':
              var sessionid = data.sessionid;

              AppCacheService.setStorageCache('sessionid', sessionid);

              AppHttpService.send({
                url: 'sral',
                params: {
                  sessionid: sessionid
                },
                onSuccess: function (data) {
                  switch (data.selectflag) {
                    case '0':
                      alert('获取菜单失败');
                      break;
                    case '1':
                      AppCacheService.setStorageCache('modules', data);
                      $state.go('customers_tab');
                      break;
                  }
                }
              });
              break;
          }
        },
        onError: function () {

        }
      });
    }
  })
  .build();
