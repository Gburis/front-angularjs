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
            restrict: 'AE',
            scope:{
                titulo: '@',
                image: '@',
                action: '&'
            },
            templateUrl: 'js/directives/partials/feed-content.html'
        }
    }).directive('alert', function(){
        return{
            restrict: 'AE',
            scope:{
                titulo: '@',
                msg: '@',
                color: '@'  
            },
            template: '<div class="row">'
                        +'<div class="my-alert {{color}}" id="my-alert">{{msg}}</div>'
                    +'</div>'
        }
    }).directive('modal', function(){
        return{
            restrict: 'AE',
            scope:{
                img:'@',
                target: '@',
                action: '&'
            },
            templateUrl: 'js/directives/partials/modal.html'
        }
    });