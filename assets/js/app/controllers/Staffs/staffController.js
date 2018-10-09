ng.controller('staffController', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

    /*
      1.- ir por el staff que me indica $routeParams.curp
    */
    $scope.$on('$viewContentLoaded', () => {
      $scope.staff = {};
        if($routeParams.numeroControl!=='nuevo'){
        $http.post('/staff/uno',{numeroControl:$routeParams.numeroControl}).then(
          function success(response){
            console.log('respuesta de obtener staff:', response);
            if(response.data && response.data.numeroControl){
              $scope.staff = response.data;
              
            }
          },
          function error(error){
          alertify.error('Se produjo un error al obtener al miembro del staff.');
          console.log('error al obtener personal de apoyo:', error);
          }
        );
      }
     });
    
      $scope.guardarStaff= function(){
        $http.post('/staff/guardar',{staff:$scope.staff}).then(
          function success(response){
            console.log('Resultado de guardar:', response);
            $location.path('/staffs');
            alertify.success('Edicion completa.');
          }, function error(err){
            alertify.error('No se pudo guardar.');
            console.log('Error al guardar:', err);
          }
        );
      };
    
    }]);
    