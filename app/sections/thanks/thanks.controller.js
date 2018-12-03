'use strict';
angular
  .module('elBaratonApp')
  .controller('ThanksController', thanksController);

  thanksController.$inject = ['$location'];
  function thanksController($location) {
    const thanksVM = this;
    thanksVM.title = 'thanks (=';
    thanksVM.goToUrl = goToUrl;

    function goToUrl(url) {
      $location.url(url);
    }

  }