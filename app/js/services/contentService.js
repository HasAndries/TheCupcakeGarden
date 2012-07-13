angular.module('theCupcakeGarden.services', [], function($provide){
  $provide.factory('contentService', ['$http',function($http){

    function ContentService(){

      function getLinks(path, callback){
        $http.get(path).success(function(data){
          var links = $(data).find('a');
          links = links.map(function(){
            var name = $(this).html();
            return name.endsWith('/') && name.slice(0,-1) || name;
          });
          links = $.makeArray(links);
          if (callback) callback(links);
        });
      }

      this.getItems = function(path, callback){
        getLinks(path, function(links){
          var folders = links.filter(function(folder){
            return folder.indexOf('.') == -1;
          });
          var files = links.filter(function(file){
            return file.indexOf('.') != -1;
          });
          var items = folders.map(function(folder){
            return {
              'name': folder,
              'images': files.filter(function(file){
                return file.toLowerCase().indexOf(folder.toLowerCase()) != -1;
              })
            };
          });
          items.forEach(function(item){
            item['thumb'] = item.images.length>0 && path+'/'+item.images[0] || ''
          });
          if (callback) callback(items);
        });
      };

      this.getFiles = function(path, callback){
        getLinks(path, function(links){
          var files = links.filter(function(file){
            return file.indexOf('.') != -1;
          });
          files = files.map(function(file){
            return [path,file].join('/');
          });
          if (callback) callback(files);
        });
      };

    }
    return new ContentService();
  }]);
});