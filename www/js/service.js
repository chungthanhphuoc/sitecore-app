appHome.service("dataService", function ($http, $httpParamSerializer) {
  /*--Get--*/
  this.Get = function (uri, opt) {
    let configGet = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "",
      }
    };
    return $http.get(uri, angular.extend(configGet, opt));
  }
  /*--Post-Data--*/
  this.Post = function (uri, objs, opt) {
    let configGet = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "",
      }
    };
    return $http.post(uri, objs, angular.extend(configGet, opt));
  }
  /*--Import-File--*/
  this.ImportFileData = function (uri, objs, opt) {
    let configGet = {
      transformRequest: angular.identity,
      headers: {
        "Content-Type": undefined,
        "Authorization": "",
      }
    };
    return $http.post(uri, objs, angular.extend(configGet, opt));
  }
});
