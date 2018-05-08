var canvas = document.getElementById("canvas");
var canvasContext = canvas.getContext("2d");

document.addEventListener("keydown", cambiarDireccion);

var tablero = new Tablero(50, 10, 3, 2, 2, canvasContext);

function cambiarDireccion(event) {
  console.log("keyCode: " + event.keyCode);
  if(TECLAS.RIGTH == event.keyCode || TECLAS.LEFT == event.keyCode || TECLAS.UP == event.keyCode || TECLAS.DOWN == event.keyCode) {
    nuevaDireccion = event.keyCode;
  }
  else {
    console.log("tecla inválida");
  }
}

tablero.inicializar();
