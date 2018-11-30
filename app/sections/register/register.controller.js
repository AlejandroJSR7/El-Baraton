'use strict';
angular
  .module('elBaratonApp')
  .controller('RegisterController', registerController);

  registerController.$inject = [];
  function registerController() {
    const registerVM = this;
    registerVM.title = 'Registrarme (=';
  }