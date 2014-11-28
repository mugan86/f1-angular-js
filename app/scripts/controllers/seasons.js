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
            .then(function(hizlariak) {

              //Championship year
          $scope.seasons = hizlariak.data
              .MRData.SeasonTable.Seasons
                ;
        });
  });


/********************************************
$scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: 'German',
          Constructors: [
              {name: 'Red Bull'}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: 'Spanish',
          Constructors: [
              {name: 'Ferrari'}
          ]
      },
      {
          Driver: {
          givenName: 'Mark',
              familyName: 'Webber'
          },
          points: 199,
          nationality: 'Australian',
          Constructors: [
              {name: 'Red Bull'}
          ]
      }
    ];
***********************************************/