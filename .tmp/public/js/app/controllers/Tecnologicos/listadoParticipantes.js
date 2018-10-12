ng.controller('listadoParticipantes', ['$scope', '$http','$timeout','$routeParams', 
  function($scope, $http, $timeout,$routeParams) {

    /*
      1.- ir por mis deportistas
      2.- listarlos
      3.- cuando le den click a uno, abrirlo
      4.- opcion de inhabilitarlo
    */
  
    
   $scope.$on('$viewContentLoaded', () => {
    $scope.deportistasTec = [];
    $scope.refresh();
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
  };


}]);
