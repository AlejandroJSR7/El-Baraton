'use strict';
angular.module('elBaratonApp')
  .config(routerConfig);

  routerConfig.$inject =  ['$routeProvider'];
  function routerConfig($routeProvider) {
    
    let home = {
      controller: 'HomeController',
      controllerAs: 'homeVM',
      templateUrl: 'app/components/home/home.view.html'
    }

    $routeProvider
      .when('/', home)
      .otherwise({
        redirectTo: '/'
      });

  }