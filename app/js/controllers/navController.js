NavController.$inject = ['$scope','$rootScope','googleService'];
function NavController($scope, $rootScope, google) {

  //Google Analytics for non-localhost
  $rootScope.$on('$viewContentLoaded', function(event) {
    google.trackPage();
  });

  $scope.menuItems = [
    {'name':'home',             'link':''},
    {'name':'gallery',          'link':'gallery'},
    {'name':'cupcakes',         'link':'cupcakes'},
    {'name':'in the store',     'link':'in-the-store'},
    {'name':'functions',        'link':'functions'},
    {'name':'contact us',       'link':'contact-us'},
    {'name':'about us',         'link':'about-us'}
  ];

}
