angular.module('manatee.profile', ['geolocation'])
.controller('ProfileController', function($scope, ManateeServices) {
   
   $scope.manatee = ManateeServices.getCurrentManatee();

   console.log('current manatee: ' + JSON.stringify($scope.manatee));

   $scope.title = $scope.manatee.name + '\'s Profile';


});