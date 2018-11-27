'use strict';
angular
  .module('elBaratonApp')
  .controller('CategoriesController', categoriesController);

  categoriesController.$inject = ['CategoriesService'];
  function categoriesController(categoriesService) {
    var categoriesVM = this;
    categoriesVM.title = 'Acceder (=';
    categoriesVM.list_of_categories = [
      {name: 'World'},
      {name: 'U'},
      {name: 'Technology'},
      {name: 'Design'},
      {name: 'Culture'},
      {name: 'Business'},
      {name: 'Politics'},
      {name: 'Opinion'},
      {name: 'Science'},
      {name: 'Health'},
      {name: 'Style'},
      {name: 'Travel'}
    ];
    
    categoriesService.getAllCategories().then(function(response){
      categoriesVM.list_of_categories = response;
      console.log('categoriesVM.list_of_categories', categoriesVM.list_of_categories);
    });


  }