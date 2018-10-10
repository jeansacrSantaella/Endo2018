ng.run(['$rootScope', '$location',function($rootScope, $location) {

  $rootScope.$on('$routeChangeStart', (event, next, current) => {
    console.log('INTENTO DE CAMBIO DE RUTA, Actual:', current, 'Siguiente:',next);

    //si es a una pagina abierta... continuar
    if (next && next.$$route && (next.$$route.originalPath === '/disciplinas' || next.$$route.originalPath === '/evento' || next.$$route.originalPath === '/mapas' || next.$$route.originalPath === '/calendario' || next.$$route.originalPath === '/login' || next.$$route.originalPath === '/acercade' || next.$$route.originalPath === '/welcome')){
      return true;
    }

    //verificar que tenga sesion
    if(!$rootScope.main.UsuarioFactory.usuario.id){ //no deberia entrar a menos que sea a login
      console.log('Acceso denegado, redireccionando a login');
      event.preventDefault();
      $location.path('/welcome').replace();
      //$location.path('/login').replace();direccionamiento a login
      return false;
    }
  });

  $rootScope.$on('$routeChangeSuccess', (event, current) => {
    console.log('CAMBIO DE RUTA', current);
    if(current && current.$$route && current.$$route.originalPath) {
      $rootScope.main.rutaActual = current.$$route.originalPath;
    }
    //console.log("ruta actual:", $rootScope.main.rutaActual);
  });
}]);


ng.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  console.log('Etapa Config (ROUTES)');

  $locationProvider.hashPrefix(''); //quitar el ! de las rutas
  $routeProvider
    .when('/login', { //configuracion de rutas
      templateUrl: 'templates/loginController.html', //ruta del archivo
      controller: 'loginController', //nombre del controller
    })
    .when('/dashboard', {
      templateUrl: 'templates/dashboardController.html', //ruta del archivo
      controller: 'dashboardController', //nombre del controller
    })
    .when('/acercade', {
      templateUrl: 'templates/acercadeController.html', //ruta del archivo
      controller: 'acercadeController', //nombre del controller
    })
    .when('/alumnos', {
      templateUrl: 'templates/alumnosController.html', //ruta del archivo
      controller: 'alumnosController', //nombre del controller
    })
    .when('/alumno/:id', {
      templateUrl: 'templates/alumnoController.html', //ruta del archivo
      controller: 'alumnoController', //nombre del controller
    })
    .when('/welcome', {
      templateUrl: 'templates/welcomeController.html', //ruta del archivo
      controller: 'welcomeController', //nombre del controller
    })
    .when('/mapas', {
      templateUrl: 'templates/mapasController.html', //ruta del archivo
      controller: 'mapasController', //nombre del controller
    })
    .when('/calendario', {
      templateUrl: 'templates/calendarioController.html', //ruta del archivo
      controller: 'calendarioController', //nombre del controller
    })
    .when('/disciplina', {
      templateUrl: 'templates/disciplinaController.html', //ruta del archivo
      controller: 'disciplinaController', //nombre del controller
    })
    .when('/evento', {
      templateUrl: 'templates/eventoController.html', //ruta del archivo
      controller: 'eventoController', //nombre del controller
    })
    .when('/disciplinas', {
      templateUrl: 'templates/disciplinasController.html', //ruta del archivo
      controller: 'disciplinasController', //nombre del controller
    })
    .when('/tecnologicos', {
      templateUrl: 'templates/Tecnologicos/tecnologicosController.html', //ruta del archivo
      controller: 'tecnologicosController', //nombre del controller
    })
    .when('/deportista/:curp', {
      templateUrl: 'templates/Deportistas/deportistaController.html', //ruta del archivo
      controller: 'deportistaController', //nombre del controller
    })
    .when('/deportistas', {
      templateUrl: 'templates/Deportistas/deportistasController.html', //ruta del archivo
      controller: 'deportistasController', //nombre del controller
    })
    .when('/staff/:numeroControl', {
      templateUrl: 'templates/Staff/staffController.html', //ruta del archivo
      controller: 'staffController', //nombre del controller
    })
    .when('/staffs', {
      templateUrl: 'templates/Staff/staffsController.html', //ruta del archivo
      controller: 'staffsController', //nombre del controller
    })
    .otherwise({
      redirectTo: '/welcome'
    });

}]);
