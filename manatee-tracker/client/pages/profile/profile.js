angular.module('manatee.profile', ['uiGmapgoogle-maps'])
.controller('ProfileController', function($scope, ManateeServices) {
   
   $scope.manatee = ManateeServices.getCurrentManatee();


   console.log('current manatee: ' + JSON.stringify($scope.manatee));

   $scope.title = $scope.manatee.name + '\'s Profile';

    var lat = $scope.manatee.latitude;
    console.log('lat = ' + lat);
    var long = $scope.manatee.longitude;
    console.log('long = ' + long);


    $scope.map = {center: {latitude: lat, longitude: long }, zoom: 9 };
    $scope.map = {center: {latitude: lat, longitude: long }, zoom: 9 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,
      coords: {
        latitude: lat,
        longitude: long
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