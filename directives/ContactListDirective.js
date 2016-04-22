angular.module('myApp')
    .directive('contactList', function(JSONPlaceholderSvc) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/contactList.html',
            link: function(scope, element, attrs) {
                JSONPlaceholderSvc.getUsers()
                    .then(
                        function(data) {
                            scope.usrList = data;
                        },
                        function(reason) {
                            $scope.error = "Couldn't find user information."
                        });
            }
        };
    });