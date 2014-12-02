'use strict';

angular.module('f1App')
  .service('driverService', function driverService($http) {
    return {
      getDriver: function(id, year) {

        var url = 'http://ergast.com/api/f1/'+year+'/drivers/'+ id +'/driverStandings.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
      getDriverRaces: function(id, year) {

        var url = 'http://ergast.com/api/f1/'+year+'/drivers/'+ id +'/results.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      },
    };
  });



