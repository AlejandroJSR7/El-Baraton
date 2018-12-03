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
    shopVM.goToThanksPage = goToThanksPage;
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
      // shopVM.changeTotalPrice();
    }

    function cleanLocalStorageCart() {
      localStorageService.cleanCart();
    }

    function goToThanksPage() {
      $location.url('/thanks');
    }

    function randomDiscount() {
      shopVM.promo_code_discount = Math.floor((Math.random() * shopVM.total_products_price) + 1);
    }

    function changeTotalPrice() {
      // if (shopVM.products_cart.length > 0) {
      //   for (let product_shop of shopVM.products_cart) {
      //     shopVM.total_products_price += parseFloat(product_shop.price);
      //   }
      // }
    }

    function removeIndividualProductFromLS($event, shop_product) {
      $event.preventDefault();
      let shop_product_id = shop_product.id;
      $event.target.parentElement.remove()
      let list_of_products_on_cart;
      getProductsFromLS();
      list_of_products_on_cart = shopVM.products_cart;
      list_of_products_on_cart.forEach((productLS, index) => {
        if (productLS.id === shop_product_id) {
          list_of_products_on_cart.splice(list_of_products_on_cart[index], 1);
        }
      });
      localStorageService.removeIndividualProduct(list_of_products_on_cart);
      shopVM.changeTotalPrice();
    }

    function buy() {
      localStorageService.cleanCart();
      shopVM.goToThanksPage();
    }

    (function init() {
      document.addEventListener('DOMContentLoaded', shopVM.getProductsFromLS());
    })();
  }