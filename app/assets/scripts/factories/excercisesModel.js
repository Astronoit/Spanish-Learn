'use strict';
angular.module('PlaylinguaApp').factory('Excercises', ['$resource', '$http', '$q', function($resource, $http, $q){
    function Excercises(data) {
        angular.extend(this, data);
        var self = this;
    };

    var resourceExcercises = $resource(
      '/excercises',
      {},
      {
        'get':{
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
          transformResponse: function(response){
            console.log(JSON.parse(response));
            return new Excercises({excercises: JSON.parse(response)});
          }
        }
      });

    angular.extend(Excercises, resourceExcercises);

    return Excercises;
}]);