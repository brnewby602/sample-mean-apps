var app = angular.module('manateeTrackerApp', [
  'manatee.home',
  'ngRoute',
  'ngMessages'
])
.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'pages/home/home.html',
    controller: 'ManateeController'
  })
  
});

