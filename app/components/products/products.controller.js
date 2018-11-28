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
    productsVM.only_availables = '';
    productsVM.getProducts = getProducts;
    productsVM.loadMoreProducts = loadMoreProducts;
    productsVM.showOnlyAvailableProducts = showOnlyAvailableProducts;
    productsVM.cleanSearchBox = cleanSearchBox;
    productsVM.addToFavorites = addToFavorites;
    
    function getProducts() {
      productsService.getAllProducts().then(function(response) {
        productsVM.list_of_products = response;
      });
    }
    
    function loadMoreProducts() {
      productsVM.limit_to += 6;
    }

    function showOnlyAvailableProducts() {
      if (productsVM.only_availables == '') {
        productsVM.only_availables = true;
      } else {
        productsVM.only_availables = '';
      }
    }

    function cleanSearchBox() {
      productsVM.search_box = '';
    }

    function addToFavorites($event, product) {
      $event.target.parentElement.classList.toggle('is-favorite');
    }

    (function init() {
      productsVM.getProducts();
    })();
  }