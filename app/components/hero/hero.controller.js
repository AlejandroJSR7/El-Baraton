'use strict';
angular
  .module('elBaratonApp')
  .controller('HeroController', heroController);

  heroController.$inject = ['ProductsService'];
  function heroController(productsService) {
    var heroVM = this;
    heroVM.title = 'Hero (=';
    heroVM.featured_product = {};
    heroVM.getProducts = getProducts;
    
    function getProducts() {
      productsService.getFeaturedProduct().then(function(response) {
        heroVM.featured_product = response;
      });
    }

    (function init() {
      heroVM.getProducts();
    })();
  }