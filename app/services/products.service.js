'use strict';

/*
 * Contains a service to communicate with the Products API
 */
angular
  .module('elBaratonApp')
  .constant('BASE_URL', '/data/')
  .constant('PRODUCTS_API', 'products.json')
  .factory('ProductsService', dataService);

function dataService($http, BASE_URL, PRODUCTS_API, $log) {
  const data = {
    'getAllProducts': getAllProducts,
    'getFeaturedProduct': getFeaturedProduct,
  };
  function getAllProducts() {
    return makeRequest().then((data) => {
      return data.products;
    });
  }
  function getFeaturedProduct() {
    return makeRequest().then((data) => {
      let random_featured_post_index = Math.floor((Math.random() * data.products.length) + 1);
      return data.products[random_featured_post_index];
    });
  }
  function makeRequest(params) {
    let requestUrl = BASE_URL + PRODUCTS_API;
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
    $log.error('XHR Failed for ProductsService');
    $log.error(errorResponse);
    return errorResponse;
  }
}