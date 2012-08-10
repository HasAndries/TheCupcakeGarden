NavController.$inject = ['$scope'];
function NavController($scope) {

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
