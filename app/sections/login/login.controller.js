'use strict';
angular
  .module('elBaratonApp')
  .controller('LoginController', loginController);

  loginController.$inject = [];
  function loginController() {
    var loginVM = this;
    loginVM.title = 'Acceder (=';
  }