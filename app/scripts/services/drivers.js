'use strict';

angular.module('f1App')
  .service('driversService', function driversService($http) {
    return {
      getDrivers: function() {

        var currentyear = new Date().getFullYear();

        console.log('Current Year: '+ currentyear);

        var url = 'http://ergast.com/api/f1/'+ currentyear + '/driverStandings.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });