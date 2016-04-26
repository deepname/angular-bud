angular
    .module("bud", [
        'ui.router',

        'bud.auth',
        'bud.posts'
    ])
    .config(function(){

    })
    .run(function($rootScope){

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            $rootScope.showLoading = true;
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            $rootScope.showLoading = false;
        });

    })