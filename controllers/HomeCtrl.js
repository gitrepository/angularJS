angular.module('myApp')
    .controller('HomeCtrl', ['$scope', 'friends', function($scope, friends) {
        $scope.title = "Home";
        $scope.friends = friends;
        $scope.selVal = 'Home';
    }]);