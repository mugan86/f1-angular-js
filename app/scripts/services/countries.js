'use strict';

angular.module('countriesApp')
  .service('countriesService', function countriesService($http) {
    return {
      getCountries: function() {

        //var url = 'http://ergast.com/api/f1/2013/driverStandings.json';
        
        var url = 'http://www.restcountries.eu/rest/v1/all';

        return $http.get(url).success(

            function(resp){

                return resp;
            }
        );
      }
    };
  });

