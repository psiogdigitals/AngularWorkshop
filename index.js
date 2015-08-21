var app = angular.module('healthCare',['ngNewRouter',"healthCare.login","healthCare.registration"]);

app.controller("mainController", function($scope, $router, $http){

    $scope.addUser= function(user){

        var postRequest =   $http.post('/adduser', user);
        postRequest.then(function(response) {
            alert(response);
        });
    };
    $router.config([
        {path:"/", component: "login"},
        {path:"components/registration/registration", component: "registration"},
        {path:"components/login/login", component: "login"}
    ]);
});








