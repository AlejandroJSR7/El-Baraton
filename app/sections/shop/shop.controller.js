'use strict';
angular
  .module('elBaratonApp')
  .controller('ShopController', shopController);

  shopController.$inject = ['ProductsService', 'LocalStorageService', '$location'];
  function shopController(productsService, localStorageService, $location) {
    const shopVM = this;
    shopVM.title = 'shop (=';
    shopVM.products_cart = [];
    shopVM.total_products_price = 0;
    shopVM.promo_code_example = 'FELIZNAVIDAD';
    shopVM.promo_code_discount = 0;
    shopVM.getLocalStorageInformation = getLocalStorageInformation;
    shopVM.getProductsFromLS = getProductsFromLS;
    shopVM.cleanLocalStorageCart = cleanLocalStorageCart;
    shopVM.goToPage = goToPage;
    shopVM.randomDiscount = randomDiscount;
    shopVM.changeTotalPrice = changeTotalPrice;
    shopVM.removeIndividualProductFromLS = removeIndividualProductFromLS;
    shopVM.buy = buy;
    
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
      shopVM.products_cart = localStorageService.getCartProducts();
      shopVM.changeTotalPrice();
    }

    function cleanLocalStorageCart() {
      localStorageService.cleanCart();
    }

    function goToPage(path_url) {
      $location.url(path_url);
    }

    function randomDiscount() {
      shopVM.promo_code_discount = Math.floor((Math.random() * shopVM.total_products_price) + 1);
    }

    function changeTotalPrice() {
      if (shopVM.products_cart.size) {
        shopVM.products_cart.forEach((product_shop, key) => {
          shopVM.total_products_price += parseFloat(product_shop.price);
        });
      }
    }

    function removeIndividualProductFromLS($event, shop_product) {
      $event.preventDefault();
      
      shopVM.products_cart.delete(shop_product.id);
      localStorageService.removeIndividualProduct(shopVM.products_cart);

      shopVM.changeTotalPrice();
    }

    function buy() {
      localStorageService.cleanCart();
      shopVM.goToPage('/thanks');
    }

    (function init() {
      document.addEventListener('DOMContentLoaded', shopVM.getProductsFromLS());
    })();
  }