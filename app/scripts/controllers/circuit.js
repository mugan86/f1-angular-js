'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:CircuitsCtrl
 * @description
 * # CricuitsCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('CircuitCtrl', function ($scope, $routeParams, circuitService) {
        circuitService.getCircuitData($routeParams.name)
            .then(function(circuits) {
          //Circuit information
          $scope.circuit = circuits.data.MRData.CircuitTable.Circuits[0];
        });
  });
