'use strict';
angular
  .module('elBaratonApp')
  .controller('ProductsController', productsController);

  productsController.$inject = ['ProductsService', 'LocalStorageService', '$location'];
  function productsController(productsService, localStorageService, $location) {
    const productsVM = this;
    productsVM.title = 'Products (=';
    productsVM.list_of_products = [];
    productsVM.limit_to = 6;
    productsVM.search_box = '';
    productsVM.only_availables = '';
    productsVM.order_by = '';
    productsVM.products_list = [];
    productsVM.filter_by_quantity_input = null;
    productsVM.filter_between_price_input_min = null;
    productsVM.filter_between_price_input_max = null;
    productsVM.getLocalStorageInformationCart = getLocalStorageInformationCart;
    productsVM.getLocalStorageInformationFavorites = getLocalStorageInformationFavorites;
    productsVM.getProducts = getProducts;
    productsVM.loadMoreProducts = loadMoreProducts;
    productsVM.showOnlyAvailableProducts = showOnlyAvailableProducts;
    productsVM.orderProductsBy = orderProductsBy;
    productsVM.cleanSearchBox = cleanSearchBox;
    productsVM.addToFavorites = addToFavorites;
    productsVM.addToCart = addToCart;
    productsVM.greaterThan = greaterThan;
    productsVM.clearFilters = clearFilters;
    productsVM.goToUrl = goToUrl;
    
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
      productsService.getAllProducts().then((response) => {
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

    function orderProductsBy(by) {
      if (productsVM.order_by == by) {
        productsVM.order_by = '';
      } else {
        productsVM.order_by = by;
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

    function greaterThan(prop, val) {
      return (item) => {
        return item[prop] >= val;
      }
    }

    productsVM.rangePriceMin = rangePriceMin;
    function rangePriceMin(prop, min_val) {
      return (item) => {
        return item[prop] >= min_val;
      }
    }
    productsVM.rangePriceMax = rangePriceMax;
    function rangePriceMax(prop, max_val) {
      return (item) => {
        return item[prop] <= max_val;
      }
    }
    
    function clearFilters() {
      productsVM.filter_by_quantity_input = null;
      productsVM.filter_between_price_input_min = null;
      productsVM.filter_between_price_input_max = null;
    }

    function goToUrl(url) {
      $location.url(url);
    }

    (function init() {
      productsVM.getProducts();
      productsVM.getLocalStorageInformationFavorites();
      productsVM.getLocalStorageInformationCart();
    })();
  }