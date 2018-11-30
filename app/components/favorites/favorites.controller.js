'use strict';
angular
  .module('elBaratonApp')
  .controller('FavoritesController', favoritesController);

  favoritesController.$inject = ['ProductsService', 'LocalStorageService'];
  function favoritesController(productsService, localStorageService) {
    var favoritesVM = this;
    favoritesVM.title = 'favorites (=';
    favoritesVM.products_favorites = [];
    favoritesVM.getLocalStorageInformation = getLocalStorageInformation;
    favoritesVM.getProductsFromLS = getProductsFromLS;
    favoritesVM.cleanLocalStorageFavorites = cleanLocalStorageFavorites;
    
    function getLocalStorageInformation() {
      let products_on_favorites_ls;
      if ( localStorageService.getFavoritesProducts() === null ) {
        products_on_favorites_ls = [];
      } else {
        products_on_favorites_ls = localStorageService.getFavoritesProducts();
      }
      return products_on_favorites_ls;
    }

    function getProductsFromLS() {
      favoritesVM.products_favorites = localStorageService.getFavoritesProducts();
    }

    function cleanLocalStorageFavorites() {
      localStorageService.cleanFavorites();
    }

    (function init() {
      favoritesVM.getProductsFromLS();
    })();
  }