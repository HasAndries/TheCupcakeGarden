var theCupcakeGardenServices = angular.module('theCupcakeGarden.services', []);
var theCupcakeGarden = angular.module('theCupcakeGarden', ['theCupcakeGarden.services']);

theCupcakeGarden.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {templateUrl:'views/home.ui'});
  $routeProvider.when('/gallery', {templateUrl:'views/gallery.ui', controller:GalleryController});
  $routeProvider.when('/cupcakes', {templateUrl:'views/cupcakes.ui'});
  $routeProvider.when('/in-the-store', {templateUrl:'views/in-the-store.ui'});
  $routeProvider.when('/functions', {templateUrl:'views/functions.ui'});
  $routeProvider.when('/contact-us', {templateUrl:'views/contact-us.ui'});
  $routeProvider.when('/about-us', {templateUrl:'views/about-us.ui'});
  $routeProvider.otherwise({redirectTo:'/'});
}]);

theCupcakeGarden
        .constant('paths', {
  'content':'content',
  'gallery':'content/gallery'
});

