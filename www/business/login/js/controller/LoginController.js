new AppModule()
  .group('app.business.login.controller')
  .require([])
  .type('controller')
  .name('LoginCtrl')
  .params(['$scope', 'AppHttpService', 'AppCacheService'])
  .action(function ($scope, AppHttpService, AppCacheService) {

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
              //window.location.href
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
                  if (data.selectflag == '1') {
                    AppCacheService.setStorageCache('applist', data);
                  }
                  else {
                    //跳转
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
