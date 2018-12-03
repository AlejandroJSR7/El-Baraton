'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoryProductsController', categoryProductsController);

  categoryProductsController.$inject = ['ProductsService', '$routeParams'];
  function categoryProductsController(productsService, $routeParams) {
    const categoryProductsVM = this;
    categoryProductsVM.title = 'Lista de categorías';
    categoryProductsVM.list_of_categories = [];
    categoryProductsVM.list_of_categorie_products = new Map();

    if ($routeParams.id) {
      productsService.getProductsByCategory($routeParams.id).then(function(response) {
        categoryProductsVM.list_of_categorie_products = response;
        console.log('categoryProductsVM.list_of_categorie_products', categoryProductsVM.list_of_categorie_products)
      });
    }

  }