'use strict';
angular
  .module('elBaratonApp')
  .controller('LoginController', loginController);

  loginController.$inject = [];
  function loginController() {
    const loginVM = this;
    loginVM.title = 'Acceder (=';
  }