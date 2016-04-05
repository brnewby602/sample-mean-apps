angular.module('manatee.services', [] )
.factory('ManateeServices', function($http) {
  var search = function(name) {

     console.log('inside ManateeServices search function for: ' + name);

     /*
     $http({
       method: 'GET',
       url: '/api/manatees'
     })
     .then(function(response) {
        console.log('inside successful GET manatee request');
        return {};
     })
     .catch(function(error) {
       console.log(error);
     });
    
    */

  };

  return {
    search: search
  };
});