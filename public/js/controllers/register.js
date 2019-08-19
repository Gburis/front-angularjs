angular.module('myproject').controller('Register', function($scope, $http){
    $scope.publication = {};
    $scope.fileName = 'Choose file';
    $scope.msg = '';
    $scope.msg_color = '';

    popUp = function(msg, color){
        $scope.msg = msg;
        $scope.msg_color = color;
        document.getElementById('my-alert').style.display = 'block';
    }


    $scope.changeName = function(file){
       let label = document.getElementById('label');
       label.innerHTML = file[0].name;

       //realizar preview da imagem a ser carregada
       var reader = new FileReader();
       reader.onload = function(e) {
        $('#preview').attr('src', e.target.result);
       }
      
       reader.readAsDataURL(file[0]);
       

    }

    $scope.register = function(){
        
        if($scope.publication.name == undefined){

            popUp('todos os campos são obtigatorios','red');
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
                popUp('Imagem cadastrada com sucesso','grey');

                // remover imagem
                $('#preview').attr('src', 'http://localhost:8080/uploads/photo.png');
                
            }).catch(function(erro){
                popUp('Erro desconhecido','red');
            });

       }else{
        popUp('Apenas imagens são permitidas (PNG|JPG|GIF)','red');

       }

       setTimeout(function(){
            document.getElementById('my-alert').style.display = 'none';
        },5000);
       
    }

});

