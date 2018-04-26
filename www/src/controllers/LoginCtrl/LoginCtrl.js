appHome.controller("AppCtrl", AppCtrl);
AppCtrl.$inject = [
  "$scope",
  "$ionicModal",
  "$ionicPopup"
];
function AppCtrl($scope, $ionicModal, $ionicPopup) {
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl("views/pages/Login/Login.html", {
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
    if (!$scope.loginData.username && !$scope.loginData.password) {
      ICommon.ShowAlert($ionicPopup, "Lỗi", "Vui lòng điền vào tài khoản và mật khẩu");
    } else {
      ICommon.ShowAlert($ionicPopup, "Thông báo", "Đăng nhập thành công", () => {
        $scope.closeLogin();
      });
    }
  };
}
