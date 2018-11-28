'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['CategoriesService'];
  function categoriesController(categoriesService) {
    var categoriesVM = this;
    categoriesVM.title = 'Acceder (=';
    categoriesVM.list_of_categories = [];

     categoriesService.getAllCategories().then(function(response) {
      categoriesVM.list_of_categories = response;
    });
  }