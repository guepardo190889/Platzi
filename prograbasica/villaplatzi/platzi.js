var MAPA = "tile.png";
var VACA = "vaca.png";
var CERDO = "cerdo.png";
var POLLO = "pollo.png";

var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {url:MAPA, cargada:false};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

var vaca = {url:VACA, cargada:false};
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

var cerdo = {url:CERDO, cargada:false};
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

var pollo = {url:POLLO, cargada:false};
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo() {
  fondo.cargada = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargada = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargada = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargada = true;
  dibujar();
}

function dibujar() {
  if(fondo.cargada) {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargada) {
    for(var i = 0 ; i < 10 ; i++) {
      var x = aleatorio(0,420);
      var y = aleatorio(0,420);
      papel.drawImage(vaca.imagen, x,y);
    }
  }
  if(cerdo.cargada) {
    papel.drawImage(cerdo.imagen, 100,100);
  }
  if(pollo.cargada) {
    papel.drawImage(pollo.imagen, 250,250);
  }
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
