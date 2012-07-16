PricingController.$inject = ['$scope', 'contentService', 'paths'];
function PricingController($scope, content, paths) {

  $scope.init = function(){
    var path = [paths.content,'test.txt'].join('/');
    content.getText(path, function(text){
      $scope.test = text;
    });
  };

}
