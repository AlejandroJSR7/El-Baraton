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
    productsVM.isFavorite = isFavorite;
    
    function getLocalStorageInformationCart() {
      let products_on_cart_ls;
      if ( localStorageService.getCartProducts() === null ) {
        products_on_cart_ls = new Map();
      } else {
        products_on_cart_ls = localStorageService.getCartProducts();
      }
      return products_on_cart_ls;
    }

    function getLocalStorageInformationFavorites() {
      let products_on_favorites_ls;
      if ( localStorageService.getFavoritesProducts() === null ) {
        products_on_favorites_ls = new Map();
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

    function addToFavorites(product) {
      let products_on_favorites_ls = productsVM.getLocalStorageInformationFavorites();
      products_on_favorites_ls.set(product.id, product);
      localStorageService.addProductToFavorites(products_on_favorites_ls);
    }

    function addToCart(product) {
      let products_on_cart_ls = productsVM.getLocalStorageInformationCart();
      products_on_cart_ls.set(product.id, product);
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

    function isFavorite(product) {
      let is_favorite = false;
      is_favorite = localStorageService.checkIfProductIsFavorite(product);
      return is_favorite;
    }

    (function init() {
      productsVM.getProducts();
      productsVM.getLocalStorageInformationFavorites();
      productsVM.getLocalStorageInformationCart();
    })();
  }