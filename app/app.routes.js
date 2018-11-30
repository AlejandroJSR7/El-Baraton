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
        templateUrl: 'app/sections/categories/categories.view.html'
      };
      let shop = {
        controller: 'ShopController',
        controllerAs: 'shopVM',
        templateUrl: 'app/sections/shop/shop.view.html'
      };

      $routeProvider
      .when('/', home)
      .when('/login', login)
      .when('/register', register)
      .when('/categories/:id', categories)
      .when('/shop', shop)
      .otherwise({
        redirectTo: '/'
      });
  }