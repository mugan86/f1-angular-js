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
    driverService.getDriver($routeParams.id, $routeParams.year)
        .then(function(id) {

          $scope.year = $routeParams.year;
            //Driver details
            $scope.driver = id.data.MRData.StandingsTable.StandingsLists[0].
            		DriverStandings[0];
            //Use to champion season
           	$scope.champion = id.data.MRData.StandingsTable;
    });
    driverService.getDriverRaces($routeParams.id, $routeParams.year)
        .then(function(id) {
            
            $scope.races = id.data.MRData.RaceTable.Races;
        });
  });
    
