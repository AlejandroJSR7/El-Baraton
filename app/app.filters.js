'use strict';
angular
  .module('elBaratonApp')
  .filter('fromMap', function() {
    return function(input) {
      var out = {};
      input.forEach((v, k) => out[k] = v);
      return out;
    };
  });