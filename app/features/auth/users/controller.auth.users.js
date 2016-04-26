angular
    .module("bud.auth.users")
    .controller("AuthUsersController", function($scope, users){
        $scope.login = "Users List";

        $scope.users = users;

    })
