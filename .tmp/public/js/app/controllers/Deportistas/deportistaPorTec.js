ng.controller('deportistaPorTecController', ['$scope', '$http','$timeout','$routeParams','$location','Upload', 
function($scope, $http, $timeout,$routeParams,$location,Upload) {
    /*
      1.- ir por el deportista que me indica $routeParams.curp
    */
   $scope.$on('$viewContentLoaded', () => {
    $scope.deportistas = [];
    $scope.refresh();
  });

  $scope.refresh = function() {
    $http.get('/deportistas/todosPorTec').then(
      function success(response) {
        console.log('Respuesta de obtener todos los deportista:', response);
        if (response.data) {
          $scope.deportistas = response.data;
        }
      },
      function error(error) {
        alertify.error('Se produjo un error al obtener los deportistas.');
        console.log('error al obtener deportistas:', error);
      }
    );
  };