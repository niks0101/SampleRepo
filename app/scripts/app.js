'use strict';

/**
 * @ngdoc overview
 * @name angularGroundApp
 * @description
 * # angularGroundApp
 *
 * Main module of the application.
 */
angular
  .module('angularGroundApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });

    console.log(_.chunk(['a', 'b', 'c', 'd'], 2));
  });
