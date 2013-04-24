SpecialsController.$inject = ['$scope', 'contentService', 'paths', '$filter'];
function SpecialsController($scope, content, paths, $filter) {

    $scope.init = function () {
        content.getFiles(paths.specials, function (files) {
            $scope.specials = files;
        });
    };

}
