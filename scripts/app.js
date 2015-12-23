var app = angular.module('material-demo', ['ngMaterial', 'ngRoute']);


app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'mainCtrl'
    })
    .when('/grid', {
      templateUrl: 'partials/grid.html',
      controller: 'gridCtrl'
    })
});

app.controller('mainCtrl', function($scope) {
  $scope.greeting1 = "Hello";
  $scope.greeting2 = "World";
});

app.controller('gridCtrl', function($scope) {
  $scope.greeting = "Why, hello there...From the grid controller";
});
