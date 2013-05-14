var theCupcakeGardenServices = angular.module('theCupcakeGarden.services', []);
var theCupcakeGarden = angular.module('theCupcakeGarden', ['theCupcakeGarden.services']);

theCupcakeGarden.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'views/home.html'});
    $routeProvider.when('/gallery', {templateUrl: 'views/gallery.html', controller: GalleryController});
    $routeProvider.when('/cupcakes', {templateUrl: 'views/cupcakes.html'});
    $routeProvider.when('/specials', {templateUrl: 'views/specials.html', controller: SpecialsController});
    $routeProvider.when('/cakes', {templateUrl: 'views/cakes.html'});
    $routeProvider.when('/contact-us', {templateUrl: 'views/contact-us.html'});
    $routeProvider.when('/about-us', {templateUrl: 'views/about-us.html'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);

theCupcakeGarden
    .constant('paths', {
        'content': 'content',
        'gallery': 'content/gallery',
        'specials': 'content/specials'
    });

