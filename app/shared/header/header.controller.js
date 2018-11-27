'use strict';
angular
  .module('elBaratonApp')
  .controller('HeaderController', headerController);

  headerController.$inject = [];
  function headerController() {
    var headerVM = this;
    headerVM.header_brand = 'El Baratón';
  }