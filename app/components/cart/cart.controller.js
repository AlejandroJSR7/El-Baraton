'use strict';
angular
  .module('elBaratonApp')
  .controller('CartController', cartController);

  cartController.$inject = ['ProductsService', 'LocalStorageService'];
  function cartController(productsService, localStorageService) {
    const cartVM = this;
    cartVM.title = 'cart (=';
    cartVM.products_cart = [];
    cartVM.getLocalStorageInformation = getLocalStorageInformation;
    cartVM.getProductsFromLS = getProductsFromLS;
    cartVM.cleanLocalStorageCart = cleanLocalStorageCart;
    cartVM.goToCartPage = goToCartPage;
    
    function getLocalStorageInformation() {
      let products_on_cart_ls;
      if ( localStorageService.getCartProducts() === null ) {
        products_on_cart_ls = [];
      } else {
        products_on_cart_ls = localStorageService.getCartProducts();
      }
      return products_on_cart_ls;
    }

    function getProductsFromLS() {
      cartVM.products_cart = localStorageService.getCartProducts();
    }

    function cleanLocalStorageCart() {
      localStorageService.cleanCart();
    }

    function goToCartPage() {
      console.log('goToCartPage');
    }

    (function init() {
      document.addEventListener('DOMContentLoaded', getProductsFromLS);
      cartVM.getProductsFromLS();
    })();
  }