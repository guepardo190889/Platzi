document.addEventListener("keydown", cambiarDireccion);

var tablero = new Tablero();
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
  tablero.imprimirNivel();

  if(!avanzar) {
    clearInterval(interval);
  }
}

function comenzarJuego() {
  //for(var i = 0; i < 25; i++) {
    //tablero.mover();
  //}
  interval = setInterval(jugar, 1000);
}

tablero.inicializar();
comenzarJuego();
