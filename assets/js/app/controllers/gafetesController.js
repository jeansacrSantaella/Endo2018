ng.controller('gafetesController', ['$scope', '$http','$timeout','$routeParams',
  function($scope, $http, $timeout,$routeParams) {

    /*
      1.- ir por mis deportistas activos
      2.- listarlos
      3.- cuando le den click a uno, abrirlo
      4.- opcion de inhabilitarlo
    */

    $scope.$on('$viewContentLoaded', () => {
      $scope.deportistas = [];
      $scope.refresh();
      cargaFondo();
      var seleccionado = {};
    });

    $scope.refresh = function() {
      $http.get('/deportistas/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los deportistas:', response);
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

    /*
     ██████   █████  ███████ ███████ ████████ ███████
    ██       ██   ██ ██      ██         ██    ██
    ██   ███ ███████ █████   █████      ██    █████
    ██    ██ ██   ██ ██      ██         ██    ██
     ██████  ██   ██ ██      ███████    ██    ███████
    */

    function cargaFondo() {
      var canvas = document.getElementById("fondo_c");
      var datau1 = canvas.getContext('2d');
      var img = new Image();
      img.src="/images/fondo_compl_final.jpg";
      img.onload = function(){ datau1.drawImage(img, 0, 0); };
      return canvas.toDataURL();
    };

    function cargaFoto(curp) {
      var nombre_foto = '/images/DeportistasFotos/' + curp + '.jpg';
      console.log(nombre_foto);
      var canvas = document.getElementById("foto_c");
      var datau2 = canvas.getContext('2d');
      var img = new Image();
      img.src=nombre_foto;
      img.onload = function(){ datau2.drawImage(img, 0, 0); };
      return canvas.toDataURL();
    };

    /*
    ██ ███    ███ ██████  ██████  ██ ███    ███ ██ ██████
    ██ ████  ████ ██   ██ ██   ██ ██ ████  ████ ██ ██   ██
    ██ ██ ████ ██ ██████  ██████  ██ ██ ████ ██ ██ ██████
    ██ ██  ██  ██ ██      ██   ██ ██ ██  ██  ██ ██ ██   ██
    ██ ██      ██ ██      ██   ██ ██ ██      ██ ██ ██   ██
    */
    $scope.imprimir = function(deportista) {
    console.log('imprimiendo...', deportista);

    datav = cargaFondo();
    dataw= cargaFoto(deportista.curp);

    new QRCode('elqrcode', {
      text: deportista.curp,
      width: 90,
      height: 90,
      colorDark : '#000000',
      colorLight : '#ffffff',
      correctLevel : QRCode.CorrectLevel.H
    });

    var canvas0 = document.getElementById('elqrcode').querySelector('canvas');
    var datau = canvas0.toDataURL();

    var dd = {
      pageMargins: [ 40, 60, 40, 60 ],
      background: {
        style: 'margen1',
        image: datav,
        width: 454,
        height: 340,
      },
      content: [
        {/*********VISTA_FRONTAL***********/
          style: 'margen2',
          table: {
            widths: [216, 216],
            body: [/*****TABLA PRINC****/
					        [{text:'\n\n\n\n', border: [true,true,true,false]}, {text: '',  border: [false,true,true,false]}],/*****ESPACIO HEADER*****/
					        [{
                    table:{
                      widths:['auto', '*'],
                      body: [
                      [{image: dataw, width: 75, border: [false,false,false,false]},//<- foto vato
                      {/*****TEC, NOMBRE, DISCIPLINA*****/
                        style: 'datosfoto',
                        table: {
                          widths: ['*'],
                          body: [
                            [{text: deportista.tecProcedencia , fontSize: 12, color: '#7a2605',border: [false,false,false,false]}],
                            [{text: '\n',border: [false,false,false,false]}],
                            [{text: deportista.nombre , fontSize: 12, border: [false,false,false,false]}],
                            [{text: '\n',border: [false,false,false,false]}],
                            [{text: deportista.disciplina, fontSize: 10, border: [false,false,false,false]}],
                          ]
                        }, border: [false,false,false,false]}/*****FIN TEC, NOMBRE, DISCIPLINA*****/
                      ]/**FIN FILA FOTO**/
                      ]},border: [true,false,true,false]}, {text:'', border: [false,false,true,false]}
				          ],/*****FIN COL FOTO, DATOS PERSONALES*****/
		              [{text:'\n',border: [true,false,true,false]},
                    {/*****QR code*****/
		    				    image: datau,
		    				    rowSpan:3,
		    				    margin:[90,15,0,0],
		    				    width:100,
		    				    height:100,
		    				    border: [false,false,true,false]
		    				    }
  				        ],//espacio entre foto y datos
  				        [{/*****DATOS MEDICOS*****/
                    style: 'datosMedicos',
                    table: {
                      widths: ['auto','*'],
									    body: [
										    [{text: 'No. Ctrl:', border: [false,false,false,false]},    {text: deportista.numeroControl, border: [false,false,false,false]},],
                        [{text: 'Tipo de Sangre:', border: [false,false,false,false]},   {text: deportista.tipoSangre, border: [false,false,false,false]},],
                        [{text: 'N.S.S:', border: [false,false,false,false]},            {text: deportista.nss, border: [false,false,false,false]},],
										    [{text: 'Alergias:', border: [false,false,false,false]},       {text: deportista.alergias, border: [false,false,false,false]},],
										    [{text: 'Padecimientos:', border: [false,false,false,false]},  {text: deportista.padecimientos, border: [false,false,false,false]},],

	    								]
		    						}, border: [true,false,true,false]},/******FIN DATOS MEDICOS*****/
                    {text:'', border: [false,false,true,false]}
	    				    ],
	    				    [{text:'\n',border: [true,false,true,false]},{text:'',border: [false,false,false,false]}],
	    				    //[{text:'\n',border: [true,false,true,false]},{text:'',border: [false,false,true,false]}],
	    				    [{text: 'DEPORTISTA', style: 'pie', border: [true,false,true,true]},{text:'',border: [false,false,true,true]}]
            ],//fin tabla princ
	        }
				}
			],
	     styles: {
         margen1: {
           margin: [40, 60, 0, 0]
         },
         margen2: {
           margin: [0, 0, 0, 0]
         },
         datosMedicos: {
           fontSize: 8,
           alignment: 'left',
           color: '#000000',
           border: [false,false,false,false]
         },
         pie: {
           alignment: 'center',
           fontSize: 16,
           bold: true,
           //fillColor: '#0f34d7',
           color:'#ffffff',
           border: [false,false,true,false]
         },
         datosfoto: {
           alignment: 'center',
           bold: 'true'
         }
       }
     };/*fin var dd*/
    pdfMake.createPdf(dd).open();
  };/*fin imprimir(deportista)*/

/*
██    ██  █████  ██████  ██  ██████  ███████
██    ██ ██   ██ ██   ██ ██ ██    ██ ██
██    ██ ███████ ██████  ██ ██    ██ ███████
 ██  ██  ██   ██ ██   ██ ██ ██    ██      ██
  ████   ██   ██ ██   ██ ██  ██████  ███████
*/
$scope.imprimir_varios = function() {console.log("entrando pdf...")
  return $.map($scope.seleccionado, function (value, index) {
    if(value){
      console.log("iniciando...");
      imprimir(index);console.log("continuando...");
    } } );console.log("cerrando...");
  //for(var i = 0; i < seleccionado.length; i++){
    //imprimir(seleccionado[i]);
  }
}]);
