'use strict';

/**
 * @ngdoc overview
 * @name f1App
 * @description
 * # f1App
 *
 * Main module of the application.
 */
angular
  .module('f1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/seasons', {
        templateUrl: 'views/seasons.html',
        controller: 'SeasonsCtrl'
      })
      .when('/season/:year', {
        templateUrl: 'views/season.html',
        controller: 'SeasonCtrl'
      })
      .when('/circuits', {
        templateUrl: 'views/circuits.html',
        controller: 'CircuitsCtrl'
      })
      .when('/circuit/:name', {
        templateUrl: 'views/circuit.html',
        controller: 'CircuitCtrl'
      })
      .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'DriversCtrl'
      })
      .when('/driver/:id/:year', {
        templateUrl: 'views/driver.html', 
        controller: 'DriverCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
