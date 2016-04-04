var app = angular.module('manateeTrackerApp', [
  'manatee.home',
  'ngRoute'
])
.config(function($routeProvider) {


  $routeProvider
  .when('/', {
    templateUrl: 'pages/home/home.html',
    controller: 'ManateeController'
  })
  
});

/*
app.controller('ManateeController', function($scope) {

   console.log("INSIDE CONTROLLER");
   $scope.title = 'I LOVE Manatees!!';
});
*/
