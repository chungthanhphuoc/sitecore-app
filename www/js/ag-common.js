var ICommon = {
  ShowAlert: ($ionicPopup, title, content, callback, opt) => {
    let defaultOpts = angular.extend({
      title: title,
      template: content,
      buttons: [
        {
          text: "Đồng ý",
          type: "button-positive",
        }
      ]
    }, opt);
    $ionicPopup.alert(defaultOpts).then((res) => {
      if (!callback) {
        return;
      } else {
        callback();
      }
    });
  },
  ShowLoading: ($ionicLoading, template, callback, opt) => {
    let defaultOpts = angular.extend({
      template: !template ? "Đang tải" : template,
    }, opt);
    $ionicLoading.show(defaultOpts).then(() => {
      if (!callback) {
        return;
      } else {
        callback();
      }
    });
  },
  HideLoading: ($ionicLoading, callback) => {
    $ionicLoading.hide().then(() => {
      if (!callback) {
        return;
      } else {
        callback();
      }
    });
  },
};
