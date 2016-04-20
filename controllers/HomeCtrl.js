angular.module('myApp')
    .controller('HomeCtrl', ['$scope', function($scope) {
        $scope.title = "Home";
        $scope.items = ['Home', 'About', 'Contact'];
        $scope.selVal = 'Home';
    }]);