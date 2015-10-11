var app = angular.module(

    'AngularUIBucketApp',
    [

        'ngRoute',
        'ngTouch',
        'mobile-angular-ui',
        'firebase'

    ]

);

app.controller(

    'MainController',
    [

        '$scope',
        '$firebaseSimpleLogin',
        function($scope, $firebaseSimpleLogin){

            var ref     = new Firebase("https://burning-fire-1723.firebaseio.com");
            var auth    = $firebaseSimpleLogin(ref);

            $scope.user  = {

                username: '',
                password: ''

            };

            $scope.SignIn = function(){

                var email       = $scope.user.username;
                var password    = $scope.user.password;

                if(email && password){

                    auth
                    .$login(

                        'password',
                        {

                            email       : email,
                            password    : password

                        }

                    )
                    .then(

                        function(user){

                            console.log('Username and password match!');

                        },
                        function(error){

                            console.log('Username and password do not match!');

                        }

                    );

                }

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