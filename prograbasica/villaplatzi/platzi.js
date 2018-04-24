var MAPA = "tile.png";
var VACA = "vaca.png";
var CERDO = "cerdo.png";
var POLLO = "pollo.png";
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = new Image();
fondo.src = MAPA;
fondo.addEventListener("load", dibujarFondo);

var vaca = new Image();
vaca.src = VACA;
vaca.addEventListener("load", dibujarVacas);

var cerdo = new Image();
cerdo.src = CERDO;
cerdo.addEventListener("load", dibujarCerdos);

var pollo = new Image();
pollo.src = POLLO;
pollo.addEventListener("load", dibujarPollos);

function dibujarFondo() {
  papel.drawImage(fondo, 0, 0);
}

function dibujarVacas() {
  papel.drawImage(vaca, 10, 10);
}

function dibujarCerdos() {
  papel.drawImage(cerdo, 100, 300);
}

function dibujarPollos() {
  papel.drawImage(pollo, 300, 150);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
