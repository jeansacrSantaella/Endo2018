ng.controller('deportistaController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    /*
      1.- ir por el deportista que me indica $routeParams.curp
    */
    $scope.$on('$viewContentLoaded', () => {
      $scope.deportista = {};
        if($routeParams.curp!=='nuevo'){
        $http.post('/deportistas/uno',{curp:$routeParams.curp}).then(
          function success(response){
            console.log('respuesta de obtener deportista:', response);
            if(response.data && response.data.curp){
              $scope.deportista = response.data;
            }
          },
          function error(error){
          alertify.error('Se produjo un error al obtener al deportista.');
          console.log('error al obtener deportista:', error);
          }
        );
      }
     });
    
      $scope.guardarDeportista= function(){
        $http.post('/deportistas/guardar',{deportista:$scope.deportista}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/deportistas');
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    
    }]);
    