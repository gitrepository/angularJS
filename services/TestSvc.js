(function() {
    angular.module('myApp')
        .factory('TestSvc', ['$http', function($http) {
            var getJsonObj = function() {
                return $http.get('/utils/friends.json')
                    .then(function(response) {
                        return response.data;
                    });
            };
            return {
                getJsonObj: getJsonObj
            };
        }]);
}());