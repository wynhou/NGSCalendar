var CalendarApp = angular.module('CalendarApp', ['ngRoute',   'ngAnimate','LocalStorageModule', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ui.calendar',
'colorpicker.module',  'mgcrea.ngStrap'
]);

CalendarApp.controller('mainController', function mainController($scope, localStorageService, $location, $route) {
  $scope.m = {};
  $scope.m.step = 0;
  $scope.$route = $route;
  $scope.goto = function(path) {
    $location.path(path);
  }
});

CalendarApp.run(function($rootScope, localStorageService, $location) {

})

CalendarApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'homeController',
      activetab: 'home'
    })


}]).config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);
