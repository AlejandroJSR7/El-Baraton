'use strict';
angular.module('elBaratonApp')
  .config(routerConfig);

  routerConfig.$inject =  ['$routeProvider'];
  function routerConfig($routeProvider) {
    
      let home = {
        controller: 'HomeController',
        controllerAs: 'homeVM',
        templateUrl: 'app/sections/home/home.view.html'
      };
      let login = {
        controller: 'LoginController',
        controllerAs: 'loginVM',
        templateUrl: 'app/sections/login/login.view.html'
      };
      let register = {
        controller: 'RegisterController',
        controllerAs: 'registerVM',
        templateUrl: 'app/sections/register/register.view.html'
      };
      let categories = {
        controller: 'CategoriesController',
        controllerAs: 'categoriesVM',
        templateUrl: 'app/sections/categories-page/categories-page.view.html'
      };
      let category_products = {
        controller: 'CategoryProductsController',
        controllerAs: 'categoryProductsVM',
        templateUrl: 'app/sections/category-products/category-products.view.html'
      };
      let shop = {
        controller: 'ShopController',
        controllerAs: 'shopVM',
        templateUrl: 'app/sections/shop/shop.view.html'
      };
      let thanks = {
        controller: 'ThanksController',
        controllerAs: 'thanksVM',
        templateUrl: 'app/sections/thanks/thanks.view.html'
      };
      let favorites = {
        controller: 'FavoritesController',
        controllerAs: 'favoritesVM',
        templateUrl: 'app/sections/favorites/favorites.view.html'
      };

      $routeProvider
      .when('/', home)
      .when('/login', login)
      .when('/register', register)
      .when('/categories/', categories)
      .when('/category/products/:id', category_products)
      .when('/shop', shop)
      .when('/thanks', thanks)
      .when('/favorites', favorites)
      .otherwise({
        redirectTo: '/'
      });
  }