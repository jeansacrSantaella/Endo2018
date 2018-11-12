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
    });

    $scope.refresh = function() {
      $http.get('/deportistas/todos').then(
        function success(response) {
          console.log('Respuesta de obtener todos los participanes:', response);
          if (response.data) {
            $scope.deportistas = response.data;
          }
        },
        function error(error) {
          alertify.error('Se produjo un error al obtener los participantes.');
          console.log('error al obtener participantes:', error);
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
      var canvas = document.getElementById("fondo");
      var datau1 = canvas.getContext("2d");
      var img = new Image();
      img.src="/images/fondo_gft_complet.jpg";
      img.onload = function(){datau1.drawImage(img, 0, 0);};
      return canvas.toDataURL();
    };

    function cargaFoto(curp) {
      var nombre_foto = '/images/DeportistasFotos/' + curp + '.jpg';
      console.log()nombre_foto;
      var canvas = document.getElementById("foto");
      var datau1 = canvas.getContext("2d");
      var img = new Image();
      img.src=nombre_foto;
      img.onload = function(){datau1.drawImage(img, 0, 0);};
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

    dataw= cargaFoto(deportista.curp);
    datav = cargaFondo();

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
        width: 510,
        /*height: 340,*/
      },
      content: [
        {/*********VISTA_FRONTAL***********/
          style: 'margen2',
          table: {
            widths: ['*', '*'],
            body: [/*****TABLA PRINC****/
					        [{text:'\n\n\n\n\n\n', border: [true,false,true,false]}, {text: '',  border: [false,false,true,false]}],/*****ESPACIO HEADER*****/
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
                            [{text: deportista.tecProcedencia , fontSize: 18, color: '#7a2605',border: [false,false,false,false]}],
                            [{text: '\n',border: [false,false,false,false]}],
                            [{text: deportista.nombre , fontSize: 18, border: [false,false,false,false]}],
                            [{text: '\n',border: [false,false,false,false]}],
                            [{text: deportista.disciplina, fontSize: 12, border: [false,false,false,false]}],
                          ]
                        }, border: [false,false,false,false]}/*****FIN TEC, NOMBRE, DISCIPLINA*****/
                      ]/**FIN FILA FOTO**/
                      ]},border: [true,false,true,false]}, {text:'', border: [false,false,true,false]}
				          ],/*****FIN COL FOTO, DATOS PERSONALES*****/
		              [{text:'\n',border: [true,false,true,false]},
                    {/*****QR code*****/
		    				    image: datau,
		    				    rowSpan:3,
		    				    margin:[110,15,0,0],
		    				    width:110,
		    				    height:110,
		    				    border: [false,false,true,false]
		    				    }
  				        ],//espacio entre foto y datos
  				        [{/*****DATOS MEDICOS*****/
                    style: 'datosMedicos',
                    table: {
                      widths: ['auto','*'],
									    body: [
										    [{text: 'No. Control:', border: [false,false,false,false]},    {text: deportista.numeroControl, border: [false,false,false,false]},],
										    [{text: 'NSS:', border: [false,false,false,false]},            {text: deportista.nss, border: [false,false,false,false]},],
										    [{text: 'T. Sanguineo:', border: [false,false,false,false]},   {text: deportista.tipoSangre, border: [false,false,false,false]},],
										    [{text: 'Alergias:', border: [false,false,false,false]},       {text: deportista.alergias, border: [false,false,false,false]},],
										    [{text: 'Padecimientos:', border: [false,false,false,false]},  {text: deportista.padecimientos, border: [false,false,false,false]},],
										    [{text: 'Tel. Emergencia:', border: [false,false,false,false]},{text: deportista.numeroEmergencia, border: [false,false,false,false]},]
	    								]
		    						}, border: [true,false,true,false]},/******FIN DATOS MEDICOS*****/
                    {text:'', border: [false,false,true,false]}
	    				    ],
	    				    [{text:'\n',border: [true,false,true,false]},{text:'',border: [false,false,false,false]}],
	    				    //[{text:'\n',border: [true,false,true,false]},{text:'',border: [false,false,true,false]}],
	    				    [{text:'\n',border: [true,false,true,false]},{text:'',border: [false,false,true,false]}],
	    				    [{text: 'DEPORTISTA', style: 'pie'},{text:'',border: [false,false,true,false]}]
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
           fontSize: 10,
           alignment: 'left',
           color: '#000000',
           border: [false,false,false,false]
         },
         pie: {
           alignment: 'center',
           fontSize: 18,
           bold: true,
           fillColor: '#0f34d7',
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
}]);
