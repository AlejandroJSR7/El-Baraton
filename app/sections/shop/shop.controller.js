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
    shopVM.promo_code_example = 'EXAMPLECODE';
    shopVM.promo_code_discount = 0;
    shopVM.getLocalStorageInformation = getLocalStorageInformation;
    shopVM.getProductsFromLS = getProductsFromLS;
    shopVM.cleanLocalStorageCart = cleanLocalStorageCart;
    shopVM.goToThanksPage = goToThanksPage;
    shopVM.randomDiscount = randomDiscount;
    shopVM.changeTotalPrice = changeTotalPrice;
    shopVM.removeProductFromLS = removeProductFromLS;
    
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

    function goToThanksPage() {
      console.log('goToThanksPage');
      $location.url('/thanks');
    }

    function randomDiscount() {
      shopVM.promo_code_discount = Math.floor((Math.random() * shopVM.total_products_price) + 1);
      console.log('shopVM.promo_code_discount', shopVM.promo_code_discount);
    }

    function changeTotalPrice() {
      for (let product_shop of shopVM.products_cart) {
        shopVM.total_products_price += parseFloat(product_shop.price);
      }
    }

    function removeProductFromLS($event, shop_product) {
      $event.preventDefault();
      let shop_product_id = shop_product.id;
      ($event.target.parentElement.parentElement).remove()
      shopVM.products_cart = localStorageService.getCartProducts();
      shopVM.products_cart.forEach((productLS, index) => {
        if(productLS.id === shop_product_id) {
          shopVM.products_cart.splice(shopVM.products_cart[index], 1);
        }
      });
      localStorageService.removeIndividualProduct(shopVM.products_cart);
      shopVM.changeTotalPrice();
    }

    (function init() {
      document.addEventListener('DOMContentLoaded', getProductsFromLS);
      shopVM.getProductsFromLS();
    })();
  }