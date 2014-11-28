'use strict';

/**
 * @ngdoc function
 * @name countriesApp.controller:DriverCtrl
 * @description
 * # DriverCtrl
 * Controller of the countriesApp
 */

angular.module('f1App')
  .controller('DriverCtrl', function ($scope, $routeParams, driverService) {
    driverService.getDriver($routeParams.id)
        .then(function(id) {
            //Driver details
            $scope.driver = id.data.MRData.StandingsTable.StandingsLists[0].
            		DriverStandings[0];
            //Use to champion season
           	$scope.champion = id.data.MRData.StandingsTable;
    });
    driverService.getDriverRaces($routeParams.id)
        .then(function(id) {
            
            $scope.races = id.data.MRData.RaceTable.Races;
        });
  });
    
