'use strict';

/*
 * Contains a service to communicate with the CATEGORIES API
 */
angular
    .module('elBaratonApp')
    .constant('BASE_URL', '/app/data/')
    .constant('CATEGORIES_API', 'categories.json')
    .factory('CategoriesService', dataService);

function dataService($http, BASE_URL, CATEGORIES_API, $log) {
    var data = {
      'getAllCategories': getAllCategories,
    };
    function getAllCategories() {
      return makeRequest().then(function(data) {
        return data.categories;
      });
    }
    function makeRequest(params) {
      var requestUrl = BASE_URL + CATEGORIES_API;
      if(params) {
        angular.forEach(params, function(value, key){
            requestUrl = requestUrl + '&' + key + '=' + value;
        });
      }
      return $http({
          'url': requestUrl,
          'method': 'GET',
          'headers': {
              'Content-Type': 'application/json'
          },
          'cache': true
      }).then(function(response) {
          return response.data;
      }).catch(dataServiceError);
    }
    return data;
    function dataServiceError(errorResponse) {
        $log.error('XHR Failed for CategoriesService');
        $log.error(errorResponse);
        return errorResponse;
    }
}