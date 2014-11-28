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
    'ngTouch'
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
      .when('/circuits', {
        templateUrl: 'views/circuits.html',
        controller: 'CircuitsCtrl'
      })
      .when('/drivers', {
        templateUrl: 'views/drivers.html',
        controller: 'DriversCtrl'
      })
      .when('/drivers/:id', {
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
