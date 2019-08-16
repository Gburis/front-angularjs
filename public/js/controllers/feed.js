angular.module('myproject').controller('Feed', function($scope, $http){
    $scope.publications = [];
    $scope.imgModal = '';
    $scope.msg = '';
    $scope.msg_color = '';
    $scope.id = '';
    
    //abrir imagem no modal
    $scope.bigImage = function(photo){
        $('#avc').modal('show');
        $scope.imgModal = photo.image;
        $scope.id = photo._id;
    }

    //trazer lista das publicações
    $http.get('http://localhost:8080/api')
    .then(function(resp){
        $scope.publications = resp.data;
    }).catch(function(err){
        console.log(err);
    })
    
    // deletar postagens
    $scope.remove = function(id){
        $http.delete('http://localhost:8080/api/'+id)
            .then(function(resp){
                $('#avc').modal('hide');
                $scope.msg = 'Imagem apagada com sucesso';
                $scope.msg_color = 'grey';
                document.getElementById('my-alert').style.display = 'block';
            }).catch(function(err){
                console.log(err);
                $scope.msg = 'Imagem apagada com sucesso';
                $scope.msg_color = 'grey';
                document.getElementById('my-alert').style.display = 'block';
            });

            setTimeout(function(){
                document.getElementById('my-alert').style.display = 'none';
            },4000);
    }
    
    
});