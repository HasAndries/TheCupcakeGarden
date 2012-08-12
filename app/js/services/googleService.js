theCupcakeGardenServices.factory('googleService', ['$window','$location',function($window, $location){
  function GoogleService(){

    this.trackPage = function(subPath){
      var path;
      if ($location.host() != 'localhost'){
        path = $location.path();
        if (subPath) path = [path,subPath].join('/');
        $window._gaq.push(['_trackPageview', path]);
      }
    };

  }
  return new GoogleService();
}]);