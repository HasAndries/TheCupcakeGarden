'use strict';

angular.module('tcg', []).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/home.html', controller: HomeController});
    $routeProvider.when('/gallery', {templateUrl: 'views/gallery.html', controller: GalleryController});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
