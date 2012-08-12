theCupcakeGardenServices.factory('googleService', ['$window','$location',function($window, $location){
  function GoogleService(){

    this.trackPage = function(subPath){
      var path;
      path = $location.path();
      if (path.indexOf('localhost') != -1){
        if (subPath) path = [path,subPath].join('/');
        $window._gaq.push(['_trackPageview', path]);
      }
    };

  }
  return new GoogleService();
}]);