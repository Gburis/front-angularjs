angular.module('myproject').controller('Feed', function($scope, $http){
    $scope.publications = [];
    $scope.imgModal = '';
    $scope.msg = '';
    $scope.msg_color = '';
    $scope.publication = '';
    $scope.filter = '';
    
    //abrir imagem no modal
    $scope.bigImage = function(photo){
        $('#avc').modal('show');
        $scope.imgModal = photo.image;
        $scope.publication = photo;
    }

    popUp = function(msg, color){
        $scope.msg = msg;
        $scope.msg_color = color;
        document.getElementById('my-alert').style.display = 'block';
    }

    //trazer lista das publicações
    $http.get('http://localhost:8080/api')
    .then(function(resp){
        $scope.publications = resp.data;
    }).catch(function(err){
        console.log(err);
    });

    // update no titulo
    $scope.update = function(photo){
        let title = document.getElementById('title').value;
        console.log(title);
        $http.put('http://localhost:8080/api/'+photo._id, {name: title})
            .then(function(resp){
                popUp('Titulo alterado com sucesso', 'grey');
            }).catch(function(err){
                console.log(err);
                popUp('Erro ao alterar titulo', 'red');
            });
    }

    // deletar postagens
    $scope.remove = function(photo){
        $http.delete('http://localhost:8080/api/'+photo._id)
            .then(function(resp){
                // ocultar modal 
                $('#avc').modal('hide');

                // remover da tela
                let indice = $scope.publications.indexOf(photo);
                $scope.publications.splice(indice,1);

                popUp('Imagem apagada com sucesso', 'grey')

            }).catch(function(err){
                popUp('Erro ao apagar Mensagem', 'red');
            });

            setTimeout(function(){
                document.getElementById('my-alert').style.display = 'none';
            },4000);
    }
    
    
});