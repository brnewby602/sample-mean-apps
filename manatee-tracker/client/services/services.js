angular.module('manatee.services', [] )
.factory('ManateeServices', function($http) {

  var currentManatee = {};
  
  var search = function(name) {

     console.log('inside ManateeServices search function for: ' + name);
     
     return $http({
       method: 'GET',
       url: '/api/manatees/' + name
     })
     .then(function(response) {
        console.log('inside successful GET manatee request');
        currentManatee = response.data;

        return response.data;
     })
     .catch(function(error) {
       console.log(error);
     });
    
  };

  var getCurrentManatee = function() {
    return currentManatee;
  }

  return {
    search: search,
    getCurrentManatee: getCurrentManatee
  };
});