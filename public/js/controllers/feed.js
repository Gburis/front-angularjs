angular.module('myproject').controller('Feed', function($scope){
    $scope.image = {};
    
    $scope.register = function(){
       console.log($scope.image);
    }
})