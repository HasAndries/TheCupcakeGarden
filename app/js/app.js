'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/home.html', controller: MyCtrl1});
    $routeProvider.when('/gallery', {templateUrl: 'views/gallery.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
