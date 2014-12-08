'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # DriversCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('DriversCtrl', function ($scope, driversService, $timeout) {
        $scope.loading = true;
        $scope.dataloaad = false;

        driversService.getDrivers()
            .then(function(hizlariak) {

              //Championship year
          $scope.champion = hizlariak.data
              .MRData.StandingsTable
                .StandingsLists[0];
            //Drivers data

          $scope.drivers = hizlariak.data
              .MRData.StandingsTable
                .StandingsLists[0].DriverStandings;
        });
        $timeout(function(){ 
            $scope.loading = false;
            $scope.dataloaad = true;
        },800);
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