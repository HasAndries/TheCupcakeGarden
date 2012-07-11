GalleryController.$inject = ['$scope', 'contentService', 'paths'];
function GalleryController($scope, content, paths) {

  $scope.init = function(){
    content.getFolders(paths.gallery, function(folders){
      $scope.categories = folders;
      console.log($scope.categories);
    });
  };

}
