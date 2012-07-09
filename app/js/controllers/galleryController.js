GalleryController.$inject = ['$scope', 'contentService', 'paths'];
function GalleryController($scope, content, paths) {

  content.getFolders(paths.gallery, function(folders){
    $scope.categories = folders;
  });

}
