angular.module('manatee.home', [])
.controller('ManateeController', function($scope, $location, ManateeServices) {
   $scope.title = 'I LOVE Manatees!!';

   $scope.manateeName = '';

   $scope.searchMyManatee = function() {
      console.log('Inside searchMyManatee for: ' + $scope.manateeName);
      ManateeServices.search($scope.manateeName)
      .then(function(manatee) {
         console.log('inside successful manatee retrieval: ' + manatee);
         $location.path('/profile');
      })
      .catch(function(err) {
        console.error('ERROR in search: ' + err);

      });
   };
});