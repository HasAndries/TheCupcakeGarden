NavController.$inject = ['$scope', '$rootScope', 'googleService'];
function NavController($scope, $rootScope, google) {

  //Google Analytics for non-localhost
  $rootScope.$on('$viewContentLoaded', function (event) {
    google.trackPage();
  });

  $scope.menuItems = [
    {'name':'home', 'link':''},
    {'name':'gallery', 'link':'gallery'},
    {'name':'cupcakes', 'link':'cupcakes'},
    {'name':'specials', 'link':'specials'},
    {'name':'cakes', 'link':'cakes'},
    {'name':'contact us', 'link':'contact-us'},
    {'name':'about us', 'link':'about-us'}
  ];

}
