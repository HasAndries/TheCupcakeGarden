var theCupcakeGarden = angular.module('theCupcakeGarden', ['theCupcakeGarden.services']);

theCupcakeGarden.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home.html', controller: HomeController});
  $routeProvider.when('/gallery', {templateUrl: 'views/gallery.html', controller: GalleryController});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

theCupcakeGarden
    .constant('paths', {
      'content': 'content',
      'gallery': 'content/gallery'
});

