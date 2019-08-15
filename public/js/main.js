angular.module('myproject', ['myDirectives', 'ngRoute' ])
    .config(function($routeProvider, $locationProvider){
        $locationProvider.html5Mode(true);
        
        $routeProvider.when('/feed', {
            templateUrl: 'views/feed.html',
            controller: 'Feed'
        });

        $routeProvider.when('/register', {
            templateUrl: 'views/register.html',
            controller: 'Register'
        });
        
        $routeProvider.otherwise({redirectTo: '/feed'});
    
    });

