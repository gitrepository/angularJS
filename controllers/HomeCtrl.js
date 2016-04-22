angular.module('myApp')
    .controller('HomeCtrl', ['$scope', 'friends', function($scope, friends) {
        $scope.title = "Home";
        $scope.friends = friends;
        $scope.selVal = 'Home';
    }]);

//Used IFFI (function(){}();) as variables are used. 
//Just another way of witing controller
/*
(function() {
    var homeCtrl = function($scope, friends) {
        $scope.title = "Home";
        $scope.friends = friends;
        $scope.selVal = 'Home';
    };
    
    angular.module('myApp')
        .controller('HomeCtrl', homeCtrl);

}());
*/