'use strict';

/**
 * @ngdoc function
 * @name f1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the f1App
 */
angular.module('f1App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
