angular.module('manatee.profile', [])
.controller('ProfileController', function($scope, ManateeServices) {
   
   $scope.manatee = ManateeServices.getCurrentManatee();

   $scope.title = 'Profile';


});