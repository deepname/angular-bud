angular
    .module('bud.posts')
    .factory('servicesPosts', function($http) {
        return {
            getPosts: function () {
                return $http.get('http://jsonplaceholder.typicode.com/posts')
            }
        }
    })