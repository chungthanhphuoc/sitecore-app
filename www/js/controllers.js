appHome.controller("AppCtrl", function ($scope, $ionicModal, $timeout) {
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('views/pages/Login/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };
  $scope.login = function () {
    $scope.modal.show();
  };
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);
    $scope.closeLogin();
  };
});
