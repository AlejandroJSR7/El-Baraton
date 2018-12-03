'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['CategoriesService', '$routeParams', '$location'];
  function categoriesController(categoriesService, $routeParams, $location) {
    const categoriesVM = this;
    categoriesVM.title = 'Lista de categorías';
    categoriesVM.list_of_categories = [];
    categoriesVM.goToUrl = goToUrl;
    
    categoriesService.getAllCategories().then(function(response) {
      categoriesVM.list_of_categories = response;
      console.log('categoriesVM.list_of_categories', categoriesVM.list_of_categories)
    });

    function goToUrl(sublevel) {
      console.log('sublevel', sublevel)
      $location.url('/category/products/' +  sublevel.id);
    }

  }