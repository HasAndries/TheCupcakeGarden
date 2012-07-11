angular.module('theCupcakeGarden.services', [], function($provide){
  $provide.factory('contentService', ['$http',function($http){

    function ContentService(){

      this.getFolders = function(path, callback){
        $http.get(path).success(function(data){
          var links = $(data).find('a');
          links = links.filter(function(){
            return $(this).html().endsWith('/');
          });
          var folders = links.map(function(){
            return $(this).html().slice(0, -1);
          });
          folders = $.makeArray(folders);
          if (callback) callback(folders);
          return folders;
        });
      }

    }
    return new ContentService();
  }]);
});