angular
    .module('bud.posts', [])
    .config(function($stateProvider){

        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: 'app/features/posts/posts.html',
                controller: 'PostsController',
                resolve : {
                    posts : function(servicesPosts){
                        return servicesPosts.getPosts();
                    }
                }
            })
    })