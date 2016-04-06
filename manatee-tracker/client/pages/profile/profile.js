angular.module('manatee.profile', ['uiGmapgoogle-maps'])
.controller('ProfileController', function($scope, ManateeServices) {
   
   $scope.manatee = ManateeServices.getCurrentManatee();

   // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

   console.log('current manatee: ' + JSON.stringify($scope.manatee));

   $scope.title = $scope.manatee.name + '\'s Profile';


    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
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