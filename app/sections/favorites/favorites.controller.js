'use strict';
angular
  .module('elBaratonApp')
  .controller('FavoritesController', favoritesController);

  favoritesController.$inject = ['$location'];
  function favoritesController($location) {
    const thanksVM = this;
    thanksVM.title = 'thanks (=';
    thanksVM.goToMainPage = goToMainPage;

    function goToMainPage() {
      $location.url('/');
    }

    (function init() {
      // 
    })();
  }