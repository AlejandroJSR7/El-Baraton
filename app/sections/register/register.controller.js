'use strict';
angular
  .module('elBaratonApp')
  .controller('RegisterController', registerController);

  registerController.$inject = [];
  function registerController() {
    var registerVM = this;
    registerVM.title = 'Registrarme (=';
  }