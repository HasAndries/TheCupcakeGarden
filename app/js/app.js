var theCupcakeGardenServices = angular.module('theCupcakeGarden.services', []);
var theCupcakeGarden = angular.module('theCupcakeGarden', ['theCupcakeGarden.services']);

theCupcakeGarden.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'views/home.html'});
  $routeProvider.when('/gallery', {templateUrl: 'views/gallery.html', controller: GalleryController});
  $routeProvider.when('/cupcakes', {templateUrl: 'views/cupcakes.html'});
  $routeProvider.when('/in-the-store', {templateUrl: 'views/in-the-store.html'});
  $routeProvider.when('/functions', {templateUrl: 'views/functions.html'});
  $routeProvider.when('/contact-us', {templateUrl: 'views/contact-us.html'});
  $routeProvider.when('/about-us', {templateUrl: 'views/about-us.html'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

theCupcakeGarden
    .constant('paths', {
      'content': 'content',
      'gallery': 'content/gallery'
});

