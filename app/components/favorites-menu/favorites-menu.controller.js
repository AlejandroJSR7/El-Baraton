'use strict';
angular
  .module('elBaratonApp')
  .controller('FavoritesMenuController', favoritesMenuController);

  favoritesMenuController.$inject = ['ProductsService', 'LocalStorageService'];
  function favoritesMenuController(productsService, localStorageService) {
    const favoritesMenuVM = this;
    favoritesMenuVM.title = 'favorites (=';
    favoritesMenuVM.products_favorites = [];
    favoritesMenuVM.getLocalStorageInformation = getLocalStorageInformation;
    favoritesMenuVM.getProductsFromLS = getProductsFromLS;
    favoritesMenuVM.cleanLocalStorageFavorites = cleanLocalStorageFavorites;
    
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
      favoritesMenuVM.products_favorites = localStorageService.getFavoritesProducts();
    }

    function cleanLocalStorageFavorites() {
      localStorageService.cleanFavorites();
    }

    (function init() {
      favoritesMenuVM.getProductsFromLS();
    })();
  }