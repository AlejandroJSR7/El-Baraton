'use strict';
angular
  .module('elBaratonApp')
  .controller('HomeController', homeController);

  homeController.$inject = [];
  function homeController() {
    var homeVM = this;
    homeVM.title = 'Hola Mundo';
    console.log('homeVM.title', homeVM.title);
  }