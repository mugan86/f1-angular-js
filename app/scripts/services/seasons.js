'use strict';

angular.module('f1App')
  .service('seasonsService', function seasonsService($http) {
    return {
      getSeasons: function() {

//http://ergast.com/api/f1/seasons.json?limit=20&offset=20
        var url = 'http://ergast.com/api/f1/seasons.json?limit=100';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });