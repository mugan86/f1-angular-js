'use strict';

angular.module('f1App')
  .service('circuitsService', function circuitsService($http) {
    return {
      getCircuits: function() {

//http://ergast.com/api/f1/seasons.json?limit=20&offset=20
        var url = 'http://ergast.com/api/f1/circuits.json?limit=100';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });