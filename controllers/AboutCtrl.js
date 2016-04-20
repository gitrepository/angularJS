angular.module('myApp')
    .controller('AboutCtrl', ['$scope', function($scope) {
        $scope.title = "About";
        $scope.items = ['Thing1', 'Thing2', 'Thing3']
    }]);