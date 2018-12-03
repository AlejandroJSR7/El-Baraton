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
      'getCartProducts': getCartProducts,
      'addProductToCart': addProductToCart,
      'getFavoritesProducts': getFavoritesProducts,
      'addProductToFavorites': addProductToFavorites,
      'cleanCart': cleanCart,
      'cleanFavorites': cleanFavorites,
      'removeIndividualProduct': removeIndividualProduct,
      'checkIfProductIsFavorite': checkIfProductIsFavorite,
      'checkIfProductIsInCart': checkIfProductIsInCart,
    };
    function getCartProducts() {
      return getLocalStorage('products_on_cart_ls');
    }
    function addProductToCart(products_on_cart_ls) {
      setLocalStorage('products_on_cart_ls', products_on_cart_ls);
    }
    function getFavoritesProducts() {
      return getLocalStorage('products_on_favorites_ls');
    }
    function addProductToFavorites(products_on_favorites_ls) {
      setLocalStorage('products_on_favorites_ls', products_on_favorites_ls);
    }
    function cleanCart() {
      cleanLocalStorage('products_on_cart_ls');
    }
    function cleanFavorites() {
      cleanLocalStorage('products_on_favorites_ls');
    }
    function removeIndividualProduct(products_on_cart_ls) {
      setLocalStorage('products_on_cart_ls', products_on_cart_ls);
    }
    function checkIfProductIsFavorite(product) {
      let favorite_products = getFavoritesProducts();
      return favorite_products.has(product.id);
    }
    function checkIfProductIsInCart(product) {
      let cart_products = getCartProducts();
      return cart_products.has(product.id);
    }

    // Functions

    function setLocalStorage(key, value) {
      localStorage.setItem(key, mapToJson(value));
    }
    function getLocalStorage(key) {
      return jsonToMap(localStorage.getItem(key));
    }
    function cleanLocalStorage(key) {
      return localStorage.clear(key);
    }
    function mapToJson(map) {
      return JSON.stringify([...map]);
    }
    function jsonToMap(jsonStr) {
      return new Map(JSON.parse(jsonStr));
    }

    return data;
}