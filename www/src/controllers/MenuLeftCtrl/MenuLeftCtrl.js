appHome.controller("MenuLeftCtrl", MenuLeftCtrl);
MenuLeftCtrl.$inject = [
  "$scope",
  "$stateParams",
];
function MenuLeftCtrl($scope, $stateParams) {
  $scope.menuLists = [
    {
      id: 1,
      title: "Quản trị hệ thống",
      subs: [
        {
          id: 1,
          title: "Nhóm người dùng",
        },
        {
          id: 2,
          title: "Người dùng",
        },
        {
          id: 3,
          title: "Phân quyền",
        }
      ]
    },
    {
      id: 2,
      title: "Từ điển dùng chung",
      subs: [
        {
          id: 1,
          title: "Quốc gia",
        },
        {
          id: 2,
          title: "Tỉnh-Thành phố",
        },
        {
          id: 3,
          title: "Quận-Huyện",
        },
      ]
    }
  ];
}
