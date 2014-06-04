'use strict';

angular.module('hciApp', [
  'ngRoute',
  'google-maps'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/explorar', {
        templateUrl: 'partials/explorar',
        controller: 'ExplorarCtrl'
      })
      .when('/projeto', {
        templateUrl: 'partials/projeto',
        controller: 'ProjetoCtrl'
      })
      .when('/chat', {
        templateUrl: 'partials/chat',
        controller: 'ChatCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });
