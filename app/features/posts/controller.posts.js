angular
    .module('bud.posts')
    .controller('PostsController', function($scope, posts){
        $scope.title = "Posts List";
        $scope.posts = posts.data;

    })
