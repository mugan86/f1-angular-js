'use strict';

angular.module('f1App')
  .service('seasonService', function seasonService($http) {
    return {
      getSeasonData: function(season) {
        var url = 'http://ergast.com/api/f1/'+season+'.json';
        

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });

