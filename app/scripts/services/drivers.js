'use strict';

angular.module('f1App')
  .service('driversService', function driversService($http) {
    return {
      getDrivers: function() {

        var url = 'http://ergast.com/api/f1/2014/driverStandings.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });