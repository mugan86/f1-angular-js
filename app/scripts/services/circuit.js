'use strict';

angular.module('f1App')
  .service('circuitService', function circuitService($http) {
    return {
      getCircuitData: function(id) {

        var url = 'http://ergast.com/api/f1/circuits/'+id+'.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });