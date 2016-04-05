angular.module('manatee.home', [])
.controller('ManateeController', function($scope, ManateeServices) {
   $scope.title = 'I LOVE Manatees!!';

   $scope.manateeName = '';


   $scope.searchMyManatee = function() {
      console.log('Inside searchMyManatee for: ' + $scope.manateeName);
      ManateeServices.search($scope.manateeName);
   };
});