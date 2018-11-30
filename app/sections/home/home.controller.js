'use strict';
angular
  .module('elBaratonApp')
  .controller('HomeController', homeController);

  homeController.$inject = [];
  function homeController() {
    const homeVM = this;
    homeVM.title = 'Hola Mundo';
  }