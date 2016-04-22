angular.module('myApp')
    .controller('AboutCtrl', ['$scope', 'JSONPlaceholderSvc', function($scope, JSONPlaceholderSvc) {
        $scope.title = "User List - JSONPlaceholder";
        /*
        //Load all users
        JSONPlaceholderSvc.getUsers()
            .then(
                function(data) {
                    $scope.users = data;
                },
                function(reason) {
                    $scope.error = "Couldn't find user information."
                });
        */
    }]);