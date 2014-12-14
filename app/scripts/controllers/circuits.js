'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:CircuitsCtrl
 * @description
 * # CricuitsCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('CircuitsCtrl', function ($scope, circuitsService) {
        circuitsService.getCircuits()
            .then(function(circuits) {
          //Circuits information
          $scope.circuits = circuits.data.MRData.CircuitTable.Circuits;
        });
  });
