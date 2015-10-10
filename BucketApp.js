var app = angular.module(

    'AngularUIBucketApp',
    [

        'ngRoute',
        'ngTouch',
        'mobile-angular-ui'

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