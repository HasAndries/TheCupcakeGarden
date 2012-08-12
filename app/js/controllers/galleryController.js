GalleryController.$inject = ['$scope', 'contentService', 'paths', 'googleService'];
function GalleryController($scope, content, paths, google) {

  $scope.imagesLoaded = false;

  $scope.init = function(){
    content.getItems(paths.gallery, function(items){
      $scope.categories = items;
    });
  };

  $scope.selectCategory = function(category){
    google.trackPage(category.name);
    $scope.imagesLoaded = false;
    var path = [paths.gallery,category.name].join('/');
    content.getFiles(path, function(files){
      $scope.images = files;
      $scope.imagesLoaded = true;
    });
  };

}
