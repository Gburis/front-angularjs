angular.module('myproject').controller('Register', function($scope, $http){
    $scope.publication = {};
    $scope.fileName = 'Choose file';

    $scope.changeName = function(file){
       console.log(file[0].name);
       let label = document.getElementById('label');
       label.innerHTML = file[0].name;
    }

    $scope.register = function(){

        console.log($scope.publication.name);
        
        if($scope.publication.name == undefined){
            console.log('Todos os campos são obrigatorios');
            return false;
        }

       let file = document.getElementById('image').files[0];
       
       var fd = new FormData();
        
       fd.append('image', file);
       fd.append('name', $scope.publication.name);
       $scope.publication.image = fd;

       console.log(fd);

       if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif' ){
            $http.post('http://localhost:8080/api', fd , {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function(resp){
                console.log(resp);
            }).catch(function(erro){
                console.log(erro);
            });
       }else{
           console.log('apenas imagens são permitidas')
       }
       
    }
})