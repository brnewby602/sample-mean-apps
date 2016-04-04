angular.module('manatee.home', [])
.controller('ManateeController', function($scope) {
   $scope.title = 'I LOVE Manatees!!';

   $scope.manateeName = '';


   $scope.searchMyManatee = function() {
      // ManateeServices.search()
      console.log("BOOOO");
      console.log('WOOT WOOT: ' + $scope.manateeName);
   };
});