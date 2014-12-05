'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # DriversCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('SeasonsCtrl', function ($scope, seasonsService) {
        seasonsService.getSeasons()
            .then(function(season) {

              //Championship year
          $scope.seasons = season.data
              .MRData.SeasonTable.Seasons
                ;
        });
  });