var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

document.addEventListener("keydown", cambiarDireccion);

var tablero = new Tablero(50, 10, 3, 2, 2, canvasContext);
var interval = 0;

function cambiarDireccion(event) {
  console.log("keyCode: " + event.keyCode);
  if(TECLAS.RIGTH == event.keyCode || TECLAS.LEFT == event.keyCode || TECLAS.UP == event.keyCode || TECLAS.DOWN == event.keyCode) {
    tablero.nuevaDireccion = event.keyCode;
  }
  else {
    console.log("tecla inválida");
  }
}

function jugar() {
  var avanzar = tablero.mover();

  if(!avanzar) {
    clearInterval(interval);
    alert("Te moriste por llegar al final del tablero");
  }
}

function comenzarJuego() {
  /*for(var i = 0; i < 25; i++) {
    tablero.mover();
  }*/
  interval = setInterval(jugar, 500);
}

tablero.inicializar();
comenzarJuego();
