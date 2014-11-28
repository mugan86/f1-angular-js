'use strict';

/**
 * @ngdoc function
 * @name countriesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the countriesApp
 */
angular.module('countriesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
