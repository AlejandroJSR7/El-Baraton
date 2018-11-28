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
    productsVM.getLocalStorageInformationCart = getLocalStorageInformationCart;
    productsVM.getLocalStorageInformationFavorites = getLocalStorageInformationFavorites;
    productsVM.getProducts = getProducts;
    productsVM.loadMoreProducts = loadMoreProducts;
    productsVM.showOnlyAvailableProducts = showOnlyAvailableProducts;
    productsVM.cleanSearchBox = cleanSearchBox;
    productsVM.addToFavorites = addToFavorites;
    productsVM.addToCart = addToCart;
    
    function getLocalStorageInformationCart() {
      let products_on_cart_ls;
      if ( localStorageService.getCartProducts() === null ) {
        products_on_cart_ls = [];
      } else {
        products_on_cart_ls = localStorageService.getCartProducts();
      }
      return products_on_cart_ls;
    }

    function getLocalStorageInformationFavorites() {
      let products_on_favorites_ls;
      if ( localStorageService.getFavoritesProducts() === null ) {
        products_on_favorites_ls = [];
      } else {
        products_on_favorites_ls = localStorageService.getFavoritesProducts();
      }
      return products_on_favorites_ls;
    }

    function getProducts() {
      productsService.getAllProducts().then(function(response) {
        productsVM.list_of_products = response;
        console.log('productsVM.list_of_products', productsVM.list_of_products);
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
      let products_on_favorites_ls;
      products_on_favorites_ls = productsVM.getLocalStorageInformationFavorites();
      products_on_favorites_ls.push(product);
      localStorageService.addProductToFavorites(products_on_favorites_ls);
    }

    function addToCart($event, product) {
      let products_on_cart_ls;
      products_on_cart_ls = productsVM.getLocalStorageInformationCart();
      products_on_cart_ls.push(product);
      localStorageService.addProductToCart(products_on_cart_ls);
    }

    (function init() {
      productsVM.getProducts();
      productsVM.getLocalStorageInformationFavorites();
      productsVM.getLocalStorageInformationCart();
    })();
  }