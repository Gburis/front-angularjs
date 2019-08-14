angular.module('myDirectives',[])
    .directive('feedHeader', function(){
        return{
            restrict: 'E',
            templateUrl: 'js/directives/partials/feed-header.html'
        }
    }).directive('registerHeader', function(){
        return{
            restrict: 'E',
            templateUrl: 'js/directives/partials/register-header.html'
        }
    }).directive('feedContent', function(){
        return{
            restrict: 'E',
            templateUrl: 'js/directives/partials/feed-content.html'
        }
    });