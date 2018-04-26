/*==import-module==*/
let moduleName = "starter";
let modules = [
  "ionic",
];
/*==import-router==*/
let routerLogin = {
  url: "/app",
  abstract: true,
  templateUrl: "views/pages/MenuLeft/MenuLeft.html",
  controller: "AppCtrl"
};
let routerListCategories = {
  url: "/categories",
  views: {
    "menuContent": {
      templateUrl: "views/pages/HomeCatalogs/HomeCatalogs.html",
      controller: "MenuLeftCtrl"
    }
  }
};

/*==define-app==*/
var appHome = angular.module(moduleName, modules);
/*==app-run-first==*/
appHome.run(($ionicPlatform) => {
  $ionicPlatform.ready(() => {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
/*==config-router==*/
appHome.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state("app", routerLogin)
    .state("app.categories", routerListCategories)
  $urlRouterProvider.otherwise("/app/categories");
});
