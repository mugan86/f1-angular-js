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
	       		$scope.circuit.push({name: $scope.circuits[i].circuitName,
                                        latitude: $scope.circuits[i].Location.lat,
                                        longitude: $scope.circuits[i].Location.long});
	      }
        });

  });

