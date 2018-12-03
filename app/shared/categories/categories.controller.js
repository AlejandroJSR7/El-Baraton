'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['CategoriesService', '$routeParams'];
  function categoriesController(categoriesService, $routeParams) {
    const categoriesVM = this;
    categoriesVM.title = 'Lista de categorías';
    categoriesVM.list_of_categories = [];
    
    categoriesService.getAllCategories().then(function(response) {
      categoriesVM.list_of_categories = response;
    });

  }