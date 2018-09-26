this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/acercadeController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 id="nuestroTec">\nNuestro Tecnológico\n</h3>\n\n<div class="jumbotron">\n  <p class="acercaDe">El Instituto Tecnológico de Oaxaca (ITO) es una institución pública de educación superior localizada en la Ciudad de Oaxaca de Juárez, Oaxaca, México. Imparte 9 carreras a nivel licenciatura y 2 a nivel posgrado en las áreas de ciencias sociales y administrativas, e ingeniería. Forma parte de la Dirección General de Educación Superior Tecnológica (DGEST), de la Secretaría de Educación Pública de México. Fue creado el 18 de abril de 1968, en un predio a las orillas de la Ciudad de Oaxaca.</p>\n  <div class=noticias1><center>\n    <p>Logotipo:</p>\n    <img src="images/LogoITO.png"/>\n    <br><p>Lema:</p>\n    <em class="lema"> “Tecnología Propia e Independencia Económica”</em></center></div>\n<div>\n  <p class="acercaDe">Somos un instrumento de desarrollo de la comunidad, con el compromiso de formar profesionistas de excelencia, capaces de responder de manera eficiente y específica a las necesidades con calidad, productividad y con una visión nacional e internacional para el presente y el futuro.</p>\n  <h3 class="lema1">Visión</h3>\n  <p class="acercaDe">Ser la mejor institución de educación superior tecnológica en la región y del país reconocida y acreditada internacionalmente como una institución de calidad.</p>\n  <h3 class="lema1">Valores</h3>\n  <p class="acercaDe">El ser humano\n                      <bR>El espíritu de servicio\n                      <bR>El liderazgo\n                      <bR>El trabajo en equipo\n                      <bR>El alto desempeño\n<br><br>Reconoce como valores que debe fomentar, los siguientes:<br>\n                        <br>El respeto\n                        <br>La honestidad\n                        <br>La ética profesional\n                        <br>La responsabilidad\n                        <br>La puntualidad\n                        <br>La empatía                        \n</p>\n<h3 class="lema1">Reconocimiento Nacional:</h3>\n<p class="acercaDe">Actualmente el Instituto Tecnológico de Oaxaca es reconocido como una de las mejores Universidades Públicas del Estado de Oaxaca, por sus logros y reconocimientos a nivel nacional.</p>\n</div>\n\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/alumnoController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>\n  Alumno\n</h1>\n<hr>\n\n<div class="row">\n  <div class="col-xs-4">\n    <label for="">Nombre</label>\n  </div>\n  <div class="col-xs-2">\n    <label for="">Matricula</label>\n  </div>\n  <div class="col-xs-2">\n  </label for="">CURP</label>\n  </div>\n  <div class="col-xs-2">\n    <label for="">Disciplina</label>\n  </div>\n  <div class="col-xs-2">\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-xs-4">\n    <input type="text" class="form-control" ng-model="alumno.nombre" />\n  </div>\n  <div class="col-xs-2">\n    <input type="text" class="form-control" ng-model="alumno.matricula" />\n  </div>\n  <div class="col-xs-2">\n    <input type="text" class="form-control" ng-model="alumno.curp" />\n  </div>\n  <div class="col-xs-2">\t\n<select name="Disciplina" class="form-control" ng-model="alumno.disciplina">\n   <option value="Ajedrez">Ajedrez</option> \n   <option value="Atletismo">Atletismo</option> \n   <option value="Futball">Futball</option>\n   <option value="Natación">Natación</option> \n   <option value="Tenis">Tenis</option>\n   <option value="Voleyball">Voleyball</option> \n</select>\n    <!--input type="text" class="form-control" ng-model="alumno.disciplina" /-->\n  </div>\n  <div class="col-xs-2 text-right">\n  <button type="button" class="btn btn-primary" ng-click="guardar()">\n    <i class="far fa-save" aria-hidden></i> Guardar\n  </button>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/alumnosController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>\n  Alumnos\n  <a href="#/alumno/nuevo" class="btn btn-primary btn-sm pull-right">\n    <i class="fas fa-plus" aria-hidden></i> Nuevo Alumno\n  </a>\n</h1>\n<hr>\n\n<div class="row">\n  <div class="col-xs-3">\n    <label for="">Nombre</label>\n  </div>\n  <div class="col-xs-3">\n    <label for="">CURP</label>\n  </div>\n  <div class="col-xs-2">\n    <label for="">Matricula</label>\n  </div>\n  <div class="col-xs-2">\n    <label for="">Disciplina</label>\n  </div>\n  <div class="col-xs-2">\n\n  </div>\n</div>\n\n<div class="row" ng-repeat="a in alumnos">\n  <div class="col-xs-3">\n    <span class="form-control" title="Creado por: {{a.usuario.nombre}}">{{a.nombre}}</span>\n  </div>\n  <div class="col-xs-3">\n    <span class="form-control" title="CURP: {{a.usuario.curp}}">{{a.curp}}</span>\n  </div>\n  <div class="col-xs-2">\n    <span class="form-control">{{a.matricula}}</span>\n  </div>\n  <div class="col-xs-2">\n    <span class="form-control">{{a.disciplina}}</span>\n  </div>\n  <div class="col-xs-2 text-right">\n    <button type="button" class="btn btn-warning btn-sm" ng-click="borrar(a)">\n      <i class="fas fa-trash-alt" aria-hidden></i>\n    </button>\n    <a ng-href="#/alumno/{{a.id}}" class="btn btn-info btn-sm">\n      <i class="fas fa-pencil-alt" aria-hidden></i>\n    </a>\n  </div>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/calendarioController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="responsiveContent">\n<iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;\nshowNav=0&amp;showDate=0&amp;showTabs=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;\nbgcolor=%239999ff&amp;src=lttempd1uc0v3b42j77a1sr8ro%40group.calendar.google.com&amp;\ncolor=%232952A3&amp;ctz=America%2FMexico_City" style="border:solid 1px #777" \n frameborder="0" scrolling="no"></iframe>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/dashboardController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Escritorio</h1>\n\n<h4>Lista de usuarios</h4>\n<ul>\n  <li ng-repeat="u in usuarios">\n    {{u.nombre}} - {{u.email}}\n  </li>\n</ul>\n';

}
return __p
};

this["JST"]["assets/templates/deportistaController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/disciplinasController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container">    \n  <div class="row">\n    <div class="col-sm-3">\n      <div class="panel panel-primary" >\n        <div class="panel-heading" id="titulo">FUTBOL</div>\n        <div class="panel-body"><img src="images/futbol.jpeg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">BASQUETBOL</div>\n        <div class="panel-body"><img src="images/basquet.jpg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">BEISBOL</div>\n        <div class="panel-body"><img src="images/beisbol.jpeg" class="img-responsive"  style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n  \n  \n    <div class="col-sm-3">\n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">NATACIÓN</div>\n        <div class="panel-body"><img src="images/natacion.jpg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">TENIS</div>\n        <div class="panel-body"><img src="images/tenis.jpeg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">VOLIBOL PLAYA</div>\n        <div class="panel-body"><img src="images/volibolP.jpg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">VOLIBOL SALA</div>\n        <div class="panel-body"><img src="images/volibolS.jpg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">AJEDREZ</div>\n        <div class="panel-body"><img src="images/ajedrez.jpeg" class="img-responsive" style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <div class="col-sm-4" id="visible"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">RELLENO</div>\n        <div class="panel-body"><img src="images/beisbol.jpeg" class="img-responsive"  style="width:100%" alt="Image"></div>\n      </div>\n    </div>\n    <!--div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">ATLETISMO</div>\n        <div class="panel-body"><img src="beisbol.jpeg" class="img-responsive" style="width:100%"  alt="Image"></div>\n      </div>\n    </div-->\n    <div class="col-sm-3"> \n      <div class="panel panel-primary">\n        <div class="panel-heading" id="titulo">SOFTBOL</div>\n        <div class="panel-body"><img src="images/softbol.jpeg" class="img-responsive" style="width:100%"  alt="Image"></div>\n      </div>\n    </div>\n\n  </div>';

}
return __p
};

this["JST"]["assets/templates/eventoController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="jumbotron text-center">\n    <h2 class="titNota">LXII Evento Nacional Estudiantil Deportivo de los Institutos Tecnológicos</h2>\n  \n  <div class="imagenCabecera">\n    <img src="../images/EntradaITO.jpg"/>\n  </div>\n  <br><br>\n  <h5 class="fechaEvento">OAXACA DE JUAREZ, OAX  18 DE SEPTIEMBRE DE 2018.</h4>\n  <br><br><br>\n  <div class="estiloNota">\n  <p class="nota">\n    Por tercera ocasión el Instituto Tecnológico de Oaxaca será sede del LXII Evento Nacional Estudiantil Deportivo de los Institutos Tecnológicos ; en su LXII edición, reunirá a mas de  3,000 estudiantes deportistas, provenientes de los distintos institutos tecnológicos de nuestro país.\n    El Instituto Tecnológico de Oaxaca está orgulloso de ser privilegiado con el honor de recibir a cada uno de los deportistas, comprometiéndose en salvaguardar cada uno de los ámbitos que englobe este gran evento. \n  </p>\n  <h2  class="normalImportante">Por lo que no se permite olvidar los principios que son base de este Encuentro Intertecnológicos:</h2>\n<ul class="normalImportante">\n  <li class="liNota">El deporte y la recreación son prácticas que constituyen elementos fundamentales para alcanzar una vida plena mediante la formación de aptitudes, capacidades, hábitos y destrezas que permiten el desarrollo armónico e integral de los individuos.</li>\n  <li class="liNota">El deporte alienta el espíritu de cooperación y solidaridad, estimula el deseo de éxito en un marco de sana competencia y coadyuva al bienestar físico, psicológico y moral de los jóvenes.</li>\n  <li class="liNota">El deporte, en el Sistema, se sustenta en el estímulo y la promoción desde la base estudiantil, entre la cual se selecciona, capacita y alienta a los mejores deportistas para llevarlos a los más altos niveles de desempeño.</li>\n</ul>\n  <h2 class="normalImportante">Los principales objetivos que persigue la realización de esta justa deportiva son:</h2>\n<ul class="normalImportante">\n  <li class="liNota">Generar un espacio de convivencia y sana competencia que refuerce la identidad de quienes forman parte del Sistema Nacional de Institutos Tecnológicos.</li>\n  <li class="liNota">Ofrecer a los alumnos alternativas para el uso adecuado del tiempo libre, contribuyendo a fortalecer sus habilidades psicomotrices y, en general, a mantener un buen estado de salud.</li>\n  <li class="liNota">Fomentar la práctica de los deportes en la comunidad estudiantil, para favorecer el desarrollo integral de nuestros jóvenes.</li>\n  <li class="liNota">De los encuentros deportivos han surgido atletas destacados que han sido preseleccionados olímpicos, tal es el caso de Eulogio Arroyo Luna, egresado del Tecnológico de Chihuahua en 1968 , el cual fue campeón nacional de lanzamiento de disco en la categoría de veteranos en 1985; además fue representante de nuestro país en los juegos Centroamericanos de 1990. Como el existen muchos otros estudiantes que tuvieron sus bases en cada uno de los eventos deportivos realizados.</li>\n  <li class="liNota">Premiar los esfuerzos de los equipos y participantes mejor preparados.</li>\n</ul>\n</div>\n</div>\n\n';

}
return __p
};

this["JST"]["assets/templates/footer.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="footer pull-right small">\n  <p>\n    <span ng-show="main.UsuarioFactory.usuario.id">Sesión de usuario: {{main.UsuarioFactory.usuario.nombre}} <a href="" ng-click="main.UsuarioFactory.logout()">Salir</a> -</span> {{main.app.name}} v{{main.app.version}}\n  </p>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/header.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-inverse navbar-fixed-top" id="navbar2" >\n    <div class="container" id="navbar1">\n      <div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">\n              <span class="sr-only">Toggle navigation</span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n              <span class="icon-bar"></span>\n            </button>\n        <a class="navbar-brand" href="#">{{main.app.name}}</a>\n      </div>\n      <div id="navbar" class="collapse navbar-collapse">\n        <ul class="nav navbar-nav">\n          <li class="fuentelista"><a href="#/welcome">Inicio</a></li>\n          <li class="fuentelista"><a href="#/evento">Evento</a></li>\n          <li class="fuentelista"><a href="#/disciplinas">Disciplinas</a></li>\n          <li class="fuentelista"><a href="#/mapas">Ubicaciones</a></li>\n          <li class="fuentelista"><a href="#/calendario">Calendario</a></li>\n          <li ng-class="{\'active\':main.rutaActual==\'/alumnos\'}" ng-show="main.UsuarioFactory.usuario.id"><a href="#/alumnos">Alumnos</a></li>\n          <li ng-class="{\'active\':main.rutaActual==\'/login\'}" ng-show="!main.UsuarioFactory.usuario.id"><a href="#/login">Entrar</a></li>\n          <li class="fuentelista"><a href="#/acercade">Acerca de</a></li>\n          <li ng-show="main.UsuarioFactory.usuario.id">\n            <a href="" ng-click="main.UsuarioFactory.logout()">\n              Salir ({{main.UsuarioFactory.usuario.nombre}})\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n  <div class="imagenCabecera">\n      <img src="images/header_federal_ito.png"/>\n  </div>\n\n';

}
return __p
};

this["JST"]["assets/templates/loginController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\n<form class="form-signin" name="formLogin">\n  <h2 class="form-signin-heading">Inicio de Sesión</h2>\n  <label for="" class="sr-only">Curp</label>\n  <input type="text" ng-model="curp" class="form-control" placeholder="curp" required autofocus>\n  <label for="inputPassword" class="sr-only">Contraseña</label>\n  <input type="password" ng-model="password" class="form-control" placeholder="Contraseña" required>\n  <button class="btn btn-lg btn-primary btn-block" type="button" ng-click="main.UsuarioFactory.login(curp, password)" ng-disabled="formLogin.$invalid">Entrar</button>\n\n  <div class="error" ng-show="!curp||!password">\n    <hr>\n    <div ng-show="!curp">La Curp es requerida</div>\n    <div ng-show="!password">El password es requerido</div>\n  </div>\n</form>\n';

}
return __p
};

this["JST"]["assets/templates/mapasController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="responsiveContent">\n    <iframe src="https://www.google.com/maps/d/u/0/embed?mid=11zMxac05mUgTpzZwltx3VxEbDnLeg4sJ">\n    </iframe>\n</div>\n';

}
return __p
};

this["JST"]["assets/templates/tecnologicoController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <h1>Tecnologicos</h1>\n      <hr>      \n      <div class="row">\n        <div class="col-xs-4">\n          <label for="">Identificador</label>\n        </div>\n        <div class="col-xs-3">\n          <label for="">Nombre</label>\n        </div>\n        <div class="col-xs-3">\n        </label for="">Logo</label>\n        </div>\n        <div class="col-xs-2">\n        </div>\n      </div>\n      \n      <div class="row">\n        <div class="col-xs-4">\n          <input type="text" class="form-control" ng-model="tecnologico.numero" />\n        </div>\n        <div class="col-xs-3">\n          <input type="text" class="form-control" ng-model="tecnologico.nombre" />\n        </div>\n        <div class="col-xs-3">\t\n            <input type="text" class="form-control" ng-model="tecnologico.direccion">\n        </div>\n        <div class="col-xs-2 text-right">\n        <button type="button" class="btn btn-primary" ng-click="guardarTec()">\n          <i class="far fa-save" aria-hidden></i> Guardar\n        </button>\n        </div>\n      </div>\n  </div>\n  ';

}
return __p
};

this["JST"]["assets/templates/welcomeController.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '  <div class="noticias1">\n    <img src="images/imagenPNoticias.png"/>\n  </div>\n  <h1>Bienvenido al Evento Nacional Deportivo Estudiantil Oaxaca 2018</h1>\n  <div class="noticias1">\n    <img src="images/logoDeportivo.jpg"  width="45%" >\n  </div>\n  <div class="clima">\n      <div class="sidebar-box widget_text clr"><h4>Tiempo en Oaxaca</h4>\t\t\t<div class="textwidget"><!-- www.tutiempo.net - Ancho:282px - Alto:91px -->\n        <div id="TT_JyJk11EkEAjcEeGA7fwDDzzDzWlALf22rdkt1siIKEjoGo3IG">El tiempo - Tutiempo.net</div>\n        <script type="text/javascript" src="https://www.tutiempo.net/s-widget/l_JyJk11EkEAjcEeGA7fwDDzzDzWlALf22rdkt1siIKEjoGo3IG"></script></div>          <div class="sidebar-box Social_Widget clr"><div class="socialmedia-buttons smw_center"><a href="https://www.facebook.com/pg/IT-Oaxaca-1639620802931392/about/?ref=page_internal" rel="nofollow" target="_blank"><img width="32" height="32" src="http://ened2018.oaxaca.tecnm.mx/wp-content/plugins/social-media-widget/images/default/32/facebook.png" alt="ITO  Facebook" title="ITO  Facebook" style="opacity: 0.8; -moz-opacity: 0.8;" class="combo" /></a><a href="https://www.youtube.com/channel/UCoAB4xky3phFzgwFM7WFV9Q?view_as=subscriber" rel="nofollow" target="_blank"><img width="32" height="32" src="http://ened2018.oaxaca.tecnm.mx/wp-content/plugins/social-media-widget/images/default/32/youtube.png" alt="ITO  YouTube" title="ITO  YouTube" style="opacity: 0.8; -moz-opacity: 0.8;" class="combo" /></a></div></div><div class="sidebar-box widget_text clr"><h4>Sitios Relacionados</h4>\t\t\t<div class="textwidget">&gt; <a class="enlace_sidebar" href="http://www.presidencia.gob.mx/">Presidencia de la República</a>\n      <hr class="dotted" />\n      &gt; <a class="enlace_sidebar" href="http://www.sep.gob.mx/">Secretaría de Educación Pública</a>\n      <hr class="dotted" />&gt; <a class="enlace_sidebar" href="http://ses.sep.gob.mx/">Subsecretaría de Educación Superior\n      </a><hr class="dotted" />\n      &gt; <a class="enlace_sidebar" href="http://www.tecnm.mx/">Tecnológico Nacional de México\n      </a>\n      <hr class="dotted" /></div>\n          </div></aside>\n        </div>\n      </div>\n  </div>\n';

}
return __p
};