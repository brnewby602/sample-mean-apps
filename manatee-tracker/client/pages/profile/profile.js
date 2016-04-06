angular.module('manatee.profile', ['uiGmapgoogle-maps'])
.controller('ProfileController', function($scope, ManateeServices) {
   
   $scope.manatee = ManateeServices.getCurrentManatee();

   // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

   console.log('current manatee: ' + JSON.stringify($scope.manatee));

   $scope.title = $scope.manatee.name + '\'s Profile';


    $scope.map = {center: {latitude: 25.165228, longitude: -80.492167 }, zoom: 9 };
    $scope.map = {center: {latitude: 25.165228, longitude: -80.492167 }, zoom: 9 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 25.165228,
        longitude: -80.492167
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };


});