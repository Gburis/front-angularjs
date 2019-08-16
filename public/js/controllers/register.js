angular.module('myproject').controller('Register', function($scope, $http){
    $scope.publication = {};
    $scope.fileName = 'Choose file';
    $scope.msg = '';
    $scope.msg_color = '';

    $scope.changeName = function(file){
       let label = document.getElementById('label');
       label.innerHTML = file[0].name;
    }

    $scope.register = function(){
        
        if($scope.publication.name == undefined){
            console.log('Todos os campos são obrigatorios');
            return false;
        }

       let file = document.getElementById('image').files[0];
       
       var fd = new FormData();
        
       fd.append('image', file);
       fd.append('name', $scope.publication.name);
       $scope.publication.image = fd;

       if(file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/gif' ){
            $http.post('http://localhost:8080/api', fd , {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            }).then(function(resp){
                $scope.publication = {};
                $scope.fileName = 'Choose file';
                $scope.msg = 'Imagem cadastrada com sucesso';
                $scope.msg_color = 'grey';
                document.getElementById('my-alert').style.display = 'block';
                
            }).catch(function(erro){
                $scope.msg = 'Erro desconhecido';
                $scope.msg_color = 'red';
                document.getElementById('my-alert').style.display = 'block';
            });

            setTimeout(function(){
                document.getElementById('my-alert').style.display = 'none';
            },4000);

       }else{
        $scope.msg = 'Apenas imagens são permitidas (PNG|JPG|GIF)';
        $scope.msg_color = 'red';
        document.getElementById('my-alert').style.display = 'block';
       }

       setTimeout(function(){
            document.getElementById('my-alert').style.display = 'none';
        },5000);
       
    }
})