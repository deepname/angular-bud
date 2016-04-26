angular
    .module("bud.auth")
    .factory('servicesUser', function($http) {
        return {
            getUsers: function () {
                return $http.get('http://jsonplaceholder.typicode.com/users')
            }
        }
    })