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

      $routeProvider
      .when('/', home)
      .when('/login', login)
      .when('/register', register)
      .otherwise({
        redirectTo: '/'
      });
  }