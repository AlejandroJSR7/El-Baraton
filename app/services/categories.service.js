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
    const data = {
      'getAllCategories': getAllCategories,
    };
    function getAllCategories() {
      return makeRequest().then((data) => {
        return data.categories;
      });
    }
    function makeRequest(params) {
      let requestUrl = BASE_URL + CATEGORIES_API;
      if(params) {
        angular.forEach(params, (value, key) => {
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
      }).then((response) => {
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