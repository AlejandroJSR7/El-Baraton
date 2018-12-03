'use strict';
angular
  .module('elBaratonApp')
  .controller('FavoritesController', favoritesController);

  favoritesController.$inject = ['$location', 'LocalStorageService'];
  function favoritesController($location, localStorageService) {
    const favoritesVM = this;
    favoritesVM.title = 'thanks (=';
    favoritesVM.products_favorites = [];
    favoritesVM.getLocalStorageInformation = getLocalStorageInformation;
    favoritesVM.getProductsFromLS = getProductsFromLS;
    favoritesVM.goToMainPage = goToMainPage;

    function getLocalStorageInformation() {
      let products_on_favorites_ls;
      if ( localStorageService.getFavoritesProducts() === null ) {
        products_on_favorites_ls = new Map();
      } else {
        products_on_favorites_ls = localStorageService.getFavoritesProducts();
      }
      return products_on_favorites_ls;
    }

    function getProductsFromLS() {
      favoritesVM.products_favorites = localStorageService.getFavoritesProducts();
    }

    function goToMainPage() {
      $location.url('/');
    }

    (function init() {
      favoritesVM.getProductsFromLS();
    })();
  }