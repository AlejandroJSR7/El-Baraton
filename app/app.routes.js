'use strict';
angular.module('elBaratonApp')
  .config(routerConfig);

  routerConfig.$inject =  ['$routeProvider'];
  function routerConfig($routeProvider) {
    
      let home = {
        controller: 'HomeController',
        controllerAs: 'homeVM',
        templateUrl: 'sections/home/home.view.html'
      };
      let login = {
        controller: 'LoginController',
        controllerAs: 'loginVM',
        templateUrl: 'sections/login/login.view.html'
      };
      let register = {
        controller: 'RegisterController',
        controllerAs: 'registerVM',
        templateUrl: 'sections/register/register.view.html'
      };
      let categories = {
        controller: 'CategoriesController',
        controllerAs: 'categoriesVM',
        templateUrl: 'sections/categories/categories.view.html'
      };

      $routeProvider
      .when('/', home)
      .when('/login', login)
      .when('/register', register)
      .when('/categories/:id', categories)
      .otherwise({
        redirectTo: '/'
      });
  }