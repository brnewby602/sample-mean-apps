var app = angular.module('manateeTrackerApp', [
  'manatee.services',
  'manatee.home',
  'manatee.profile',
  'ngRoute',
  'ngMessages'
])
.config(function($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'pages/home/home.html',
    controller: 'ManateeController'
  }).
  when('/profile', {
    templateUrl: 'pages/profile/profile.html',
    controller: 'ProfileController'
  });
  
});

