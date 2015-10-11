var app = angular.module(

    'AngularUIBucketApp',
    [

        'ngRoute',
        'ngTouch',
        'mobile-angular-ui'

    ]

);

app.controller(

    'MainController',
    [

        '$scope',
        function($scope){

            $scope.user  = {

                username: '',
                password: ''

            };

            $scope.SignIn = function(){

                var email       = $scope.user.username;
                var password    = $scope.user.password;

                if(email && password){}

            }

        }

    ]

);

app.config(

    function($routeProvider, $locationProvider){

        $routeProvider.when(

            '/',
            { templateUrl: 'SignIn.html' }

        );

    }

);