ng.controller('listadoParticipantes', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {
      
   $scope.$on('$viewContentLoaded', () => {
    $scope.deportistasTec = [];
    $scope.entrenadores = [];
    $scope.nombreTec=$routeParams.tecProcedencia;
    $scope.opc=1;
    $scope.refresh();
    console.log($scope.opc);

  });

  $scope.refresh = function() {
    $http.post('/deportistas/todos-tec',{tecProcedencia:$routeParams.tecProcedencia}).then(
      function success(response) {
        console.log('Respuesta de obtener todos los deportista:', response);
        if (response.data) {
          $scope.deportistasTec = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los deportistas.');
        console.log('error al obtener deportistas:', error);
      }
    );
    $http.post('/auxiliares/entrenadores-tec',{tecProcedencia:$routeParams.tecProcedencia}).then(
      function success(response) {
        console.log('Respuesta de obtener todos los deportista:', response);
        if (response.data) {
          $scope.entrenadores = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los deportistas.');
        console.log('error al obtener deportistas:', error);
      }
    );
  };

  $scope.opcion=function($opc){
    $scope.opc=$opc;
  }

  $scope.activarDeportista= function($curp){
    $http.post('/deportistas/activar',{
        curp:$curp
    }).then(
      function success(response){
        console.log('Resultado de guardar:', response);
        alertify.success('Activación completa.');
      }, function error(err){
        alertify.error('No se pudo activar.');
        console.log('Error al activar:', err);
      }
    );$scope.refresh();
  };



}]);
