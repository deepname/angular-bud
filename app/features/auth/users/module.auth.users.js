angular
    .module("bud.auth.users", [])
    .config(function($stateProvider){

        $stateProvider
            .state('users', {
                url: "/users",
                templateUrl: "app/features/auth/users/users.html",
                controller: "AuthUsersController",
                resolve : {
                    users : function(servicesUser){
                        return servicesUser.getUsers();
                    }
                }
            })
    })