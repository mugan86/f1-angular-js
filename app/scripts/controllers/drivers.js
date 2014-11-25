'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('DriversCtrl', function ($scope) {
    $scope.driversList = [
      {
          Driver: {
              givenName: 'Sebastian',
              familyName: 'Vettel'
          },
          points: 322,
          nationality: "German",
          Constructors: [
              {name: "Red Bull"}
          ]
      },
      {
          Driver: {
          givenName: 'Fernando',
              familyName: 'Alonso'
          },
          points: 207,
          nationality: "Spanish",
          Constructors: [
              {name: "Ferrari"}
          ]
      },
      {
          Driver: {
          givenName: 'Mark',
              familyName: 'Webber'
          },
          points: 199,
          nationality: "Australian",
          Constructors: [
              {name: "Red Bull"}
          ]
      }
    ];
  });
