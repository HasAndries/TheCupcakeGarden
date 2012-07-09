angular.module('theCupcakeGarden.services', [], function($provide){
  $provide.factory('contentService', ['$http',function($http){

    function ContentService(){

      this.getFolders = function(path, callback){
        $http.get(path).success(function(data){
          console.log(data);
          var folders = ['1','2','3'];
          if (callback) callback(folders);
          return folders;
        });
      }

    }
    return new ContentService();
  }]);
});