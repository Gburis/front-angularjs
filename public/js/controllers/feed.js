angular.module('myproject').controller('Feed', function($scope, $http){
    $scope.publications = [];
    
    $http.get('http://localhost:8080/api')
    .then(function(resp){
        // $scope.publications = resp.data;
        console.log(resp.data);
    }).catch(function(err){
        console.log(err);
    })
    
    
});