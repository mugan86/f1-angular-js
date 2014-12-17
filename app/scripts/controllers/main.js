'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('MainCtrl', function ($scope, circuitsService) {

  	$scope.circuit = [];
        circuitsService.getCircuits()
            .then(function(circuits) {
          //Circuits information
          $scope.circuits = circuits.data.MRData.CircuitTable.Circuits;
          console.log($scope.circuits);
          for (var i = 0; i < $scope.circuits.length; i ++)
	      {
	       		/*console.log($scope.circuits[i].circuitName);
	       		console.log($scope.circuits[i].Location.lat);
	       		console.log($scope.circuits[i].Location.long);
	       		console.log('--------------------------------');*/
	       		$scope.circuit.push({name: $scope.circuits[i].circuitName,
                                        latitude: $scope.circuits[i].Location.lat,
                                        longitude: $scope.circuits[i].Location.long});
	      }

	      //console.log($scope.circuit.length);
        });

      $scope.positions = [{lat:37.7699298,lng:-122.4469157}];
      $scope.addMarker = function(event) {
        var ll = event.latLng;
        $scope.positions.push({lat:ll.lat(), lng: ll.lng()});
      }
      $scope.deleteMarkers = function() {
        $scope.positions = [];
      };
      $scope.showMarkers = function() {
        for (var key in $scope.map.markers) {
          $scope.map.markers[key].setMap($scope.map);
        };
      };
      $scope.hideMarkers = function() {
        for (var key in $scope.map.markers) {
          $scope.map.markers[key].setMap(null);
        };
      };

  });

