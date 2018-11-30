'use strict';
angular
  .module('elBaratonApp')
  .controller('HeaderController', headerController);

  headerController.$inject = [];
  function headerController() {
    const headerVM = this;
    headerVM.header_brand = 'El Baratón';
  }