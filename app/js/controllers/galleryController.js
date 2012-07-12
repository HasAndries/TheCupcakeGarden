GalleryController.$inject = ['$scope', 'contentService', 'paths'];
function GalleryController($scope, content, paths) {

  $scope.init = function(){
    content.getItems(paths.gallery, function(items){
      $scope.categories = items;
      console.log($scope.categories);
    });
  };

}
