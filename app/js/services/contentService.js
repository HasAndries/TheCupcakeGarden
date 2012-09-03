theCupcakeGardenServices.factory('contentService', ['$http','$filter', function ($http,$filter) {

  function ContentService() {

    function endsWith(str, suffix) {
      return str.indexOf(suffix, this.length - suffix.length) !== -1;
    }
    function getLinks(path, callback) {
      $http.get(path).success(function (data) {
        var links = $(data).find('a');
        links = $.map(links, function (link) {
          var name = $(link).html();
          return endsWith(name, '/') && name.slice(0, -1) || name;
        });
        links = $.makeArray(links);
        if (callback) callback(links);
      });
    }

    this.getItems = function (path, callback) {
      getLinks(path, function (links) {
        var folders = $filter('filter')(links, function(folder){
          return folder.indexOf('.') == -1;
        });
        var files = $filter('filter')(links, function(file){
          return file.indexOf('.') != -1;
        });
        var items = $.map(folders, function (folder) {
          return {
            'name':folder,
            'images':$filter('filter')(files, function (file) {
              return file.toLowerCase().indexOf(folder.toLowerCase()) != -1;
            })
          };
        });
        angular.forEach(items, function (item) {
          item['thumb'] = item.images.length > 0 && path + '/' + item.images[0] || ''
        });
        items = $filter('filter')(items, function (item) {
          return item['thumb'] != '';
        });
        if (callback) callback(items);
      });
    };

    this.getFiles = function (path, callback) {
      getLinks(path, function (links) {
        var files = $filter('filter')(links, function (file) {
          return file.indexOf('.') != -1;
        });
        files = $.map(files, function (file) {
          return [path, file].join('/');
        });
        if (callback) callback(files);
      });
    };

    this.getText = function (path, callback) {
      $http.get(path).success(function (data) {
        if (callback) callback(data);
      });
    }

  }

  return new ContentService();
}]);