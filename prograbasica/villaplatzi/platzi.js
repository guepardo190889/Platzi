var TILE = "tile.png";
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var imagen = new Image();
imagen.src = TILE;
imagen.addEventListener("load", dibujar);

function dibujar() {
  papel.drawImage(imagen, 100, 100);
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}
