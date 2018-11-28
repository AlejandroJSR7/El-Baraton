'use strict';
angular
  .module('elBaratonApp')
  .controller('ProductsController', productsController);

  productsController.$inject = ['ProductsService'];
  function productsController(productsService) {
    var productsVM = this;
    productsVM.title = 'Products (=';
    productsVM.list_of_products = [];
    productsVM.limit_to = 6;
    productsVM.search_box = '';
    productsVM.getProducts = getProducts;
    productsVM.loadMoreProducts = loadMoreProduct;
    productsVM.showOnlyAvailableProducts = showOnlyAvailableProducts;
    
    function getProducts() {
      productsService.getAllProducts().then(function(response) {
        productsVM.list_of_products = response;
      });
    }
    
    function loadMoreProduct() {
      productsVM.limit_to += 6;
    }

    function showOnlyAvailableProducts() {}

    (function init() {
      productsVM.getProducts();
    })();
  }