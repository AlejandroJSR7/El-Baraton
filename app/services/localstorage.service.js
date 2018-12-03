'use strict';

/*
 * Contains a service to communicate with the localStorage
 */
angular
    .module('elBaratonApp')
    .factory('LocalStorageService', dataService);

function dataService($http, $log) {
    // The next should be in localStorage
    // products_on_cart_ls
    // products_on_favorites_ls

    const data = {
      'getToken': getToken,
      'getCartProducts': getCartProducts,
      'addProductToCart': addProductToCart,
      'getFavoritesProducts': getFavoritesProducts,
      'addProductToFavorites': addProductToFavorites,
      'cleanCart': cleanCart,
      'cleanFavorites': cleanFavorites,
      'removeIndividualProduct': removeIndividualProduct
    };
    function getCartProducts() {
      return getToken('products_on_cart_ls');
    }
    function addProductToCart(products_on_cart_ls) {
      setLocalStorage('products_on_cart_ls', products_on_cart_ls);
    }
    function getFavoritesProducts() {
      return getToken('products_on_favorites_ls');
    }
    function addProductToFavorites(products_on_favorites_ls) {
      setLocalStorage('products_on_favorites_ls', products_on_favorites_ls);
    }
    function cleanCart() {
      cleanLS('products_on_cart_ls');
    }
    function cleanFavorites() {
      cleanLS('products_on_favorites_ls');
    }
    function removeIndividualProduct(products_on_cart_ls) {
      setLocalStorage('products_on_cart_ls', products_on_cart_ls);
    }

    // Functions

    function getToken(key) {
      return getLocalStorage(key);
    }
    function setLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    function getLocalStorage(key) {
      return JSON.parse(localStorage.getItem(key));
    }
    function cleanLS(key) {
      return localStorage.clear(key);
    }

    return data;
}