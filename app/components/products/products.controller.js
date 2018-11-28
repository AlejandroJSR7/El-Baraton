'use strict';
angular
  .module('elBaratonApp')
  .controller('ProductsController', productsController);

  productsController.$inject = ['ProductsService', 'LocalStorageService'];
  function productsController(productsService, localStorageService) {
    var productsVM = this;
    productsVM.title = 'Products (=';
    productsVM.list_of_products = [];
    productsVM.limit_to = 6;
    productsVM.search_box = '';
    productsVM.only_availables = '';
    productsVM.products_list = [];
    productsVM.getLocalStorageInformation = getLocalStorageInformation;
    productsVM.getProducts = getProducts;
    productsVM.loadMoreProducts = loadMoreProducts;
    productsVM.showOnlyAvailableProducts = showOnlyAvailableProducts;
    productsVM.cleanSearchBox = cleanSearchBox;
    productsVM.addToFavorites = addToFavorites;
    productsVM.addToCart = addToCart;
    
    function getLocalStorageInformation() {
      let products_on_cart_ls;
      if ( localStorageService.getCartProducts() === null ) {
        products_on_cart_ls = [];
      } else {
        products_on_cart_ls = localStorageService.getCartProducts();
      }
      return products_on_cart_ls;
    }

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

    function addToCart($event, product) {
      let products_on_cart_ls;
      products_on_cart_ls = productsVM.getLocalStorageInformation();
      products_on_cart_ls.push(product);
      localStorageService.addProductToCart(products_on_cart_ls);
    }

    (function init() {
      productsVM.getProducts();
      productsVM.getLocalStorageInformation();
    })();
  }