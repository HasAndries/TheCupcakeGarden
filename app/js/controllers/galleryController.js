GalleryController.$inject = ['$scope', 'contentService', 'paths'];
function GalleryController($scope, content, paths) {

  $scope.init = function(){
    content.getItems(paths.gallery, function(items){
      $scope.categories = items;
    });
  };

  $scope.selectCategory = function(category){
    var path = [paths.gallery,category.name].join('/');
    content.getFiles(path, function(files){
      $scope.images = files;
    });
  };

}
