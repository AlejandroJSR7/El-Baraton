'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['CategoriesService'];
  function categoriesController(categoriesService) {
    const categoriesVM = this;
    categoriesVM.title = 'Categories (=';
    categoriesVM.list_of_categories = [];

     categoriesService.getAllCategories().then(function(response) {
      categoriesVM.list_of_categories = response;
    });
  }