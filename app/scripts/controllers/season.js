'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # DriversCtrl
 * Controller of the f1App
 */

angular.module('f1App')
  .controller('SeasonCtrl', function ($scope, $routeParams, seasonService) {
    seasonService.getSeasonData($routeParams.year)
        .then(function(result) {

          $scope.year = $routeParams.year;
            //Season details
          $scope.total = result.data.MRData.total;
          $scope.races = result.data.MRData.RaceTable.Races;
            
    });
});