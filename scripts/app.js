var CalendarApp = angular.module('CalendarApp', ['ngRoute',   'ngAnimate','LocalStorageModule', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ui.calendar',
'colorpicker.module',  'mgcrea.ngStrap','ui.utils.masks','ui.select','moment-picker','angularMoment'
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

CalendarApp.config(['momentPickerProvider', function (momentPickerProvider) {
        momentPickerProvider.options({
            /* Picker properties */
            locale:        'en',
            format:        'L LT',
            minView:       'year',
            maxView:       'hour',
            startView:     'month',
            autoclose:     true,
            today:         true,
            keyboard:      true,

            /* Extra: Views properties */
            leftArrow:     '&larr;',
            rightArrow:    '&rarr;',
            yearsFormat:   'YYYY',
            monthsFormat:  'MMM',
            daysFormat:    'D',
            hoursFormat:   'H:[00]',
            minutesFormat: moment.localeData().longDateFormat('LT').replace(/[aA]/, ''),
            secondsFormat: 'ss',
            minutesStep:   15,
            secondsStep:   1
        });
    }]);
