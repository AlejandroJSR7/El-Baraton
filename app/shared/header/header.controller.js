'use strict';
angular
  .module('elBaratonApp')
  .controller('HeaderController', headerController);

  headerController.$inject = ['$location'];
  function headerController($location) {
    const headerVM = this;
    headerVM.header_brand = 'El Baratón';
    headerVM.goToPage = goToPage;

    function goToPage(path_url) {
      $location.url(path_url)
    }
    
  }