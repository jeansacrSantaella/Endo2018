ng.controller('deportistaController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    /*
      1.- ir por el alumno que me indica $routeParams.id
    */
  
    
      $scope.guardarTec= function(){
        $http.post('/deportistas/guardar',{deportista:$scope.deportista}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/deportista');
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    
    }]);
    