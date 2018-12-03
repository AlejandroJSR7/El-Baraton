'use strict';
angular
  .module('elBaratonApp')
  .controller('HeroController', heroController);

  heroController.$inject = ['ProductsService', 'LocalStorageService'];
  function heroController(productsService, localStorageService) {
    const heroVM = this;
    heroVM.title = 'Hero (=';
    heroVM.featured_product = {};
    heroVM.getLocalStorageInformationCart = getLocalStorageInformationCart;
    heroVM.getFeaturedProduct = getFeaturedProduct;
    heroVM.addToCart = addToCart;
    
    function getLocalStorageInformationCart() {
      let products_on_cart_ls;
      if ( localStorageService.getCartProducts() === null ) {
        products_on_cart_ls = [];
      } else {
        products_on_cart_ls = localStorageService.getCartProducts();
      }
      return products_on_cart_ls;
    }
    function getFeaturedProduct() {
      productsService.getFeaturedProduct().then(function(response) {
        heroVM.featured_product = response;
      });
    }
    function addToCart(product) {
      let products_on_cart_ls;
      products_on_cart_ls = heroVM.getLocalStorageInformationCart();
      products_on_cart_ls.push(product);
      localStorageService.addProductToCart(products_on_cart_ls);
    }

    (function init() {
      heroVM.getFeaturedProduct();
    })();
  }