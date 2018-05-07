var TAMANIO_INICIAL_CULEBRITA = 3;

var TECLAS = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

var canvas = document.getElementById("canvas");
//canvas.addEventListener("mousedown", comenzarDibujo);
//canvas.addEventListener("mouseup", terminarDibujo);
//canvas.addEventListener("mousemove", dibujarConMouse);

var canvasContext = canvas.getContext("2d");

document.addEventListener("keydown", cambiarDireccion);

var numCasillas = 50;
var tamanioCasilla = 10;
var tablero = [];
var culebra = new Culebra();
var interval;
//var direccion = TECLAS.RIGTH;
var nuevaDireccion = TECLAS.RIGTH;

function dibujarMarco() {
  dibujarLinea("black", 0, 0, (numCasillas*tamanioCasilla)+1, 0);
  dibujarLinea("black", (numCasillas*tamanioCasilla)+1, 0, (numCasillas*tamanioCasilla)+1, (numCasillas*tamanioCasilla)+1);
  dibujarLinea("black", (numCasillas*tamanioCasilla)+1, (numCasillas*tamanioCasilla)+1, 0, (numCasillas*tamanioCasilla)+1);
  dibujarLinea("black", 0, (numCasillas*tamanioCasilla)+1, 0, 0);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  canvasContext.beginPath();
  canvasContext.strokeStyle = color;
  canvasContext.lineWidth = 1;
  canvasContext.moveTo(xInicial, yInicial);
  canvasContext.lineTo(xFinal, yFinal);
  canvasContext.stroke();
  canvasContext.closePath();
}

function crearTablero(tamanioTablero, tamanioCasilla, canvasXInicial, canvasYInicial) {
  var t = new Array(tamanioTablero)

  for(var i = 0; i < tamanioTablero; i++) {
    t[i] = new Array(tamanioTablero);

    var canvasXOriginal = canvasXInicial;
    var canvasYOriginal = canvasYInicial;

    for(var j=0; j < tamanioTablero; j++) {
      //console.log(x+","+y);
      t[i][j] = new Casilla(j, i, canvasXInicial, canvasYInicial, tamanioCasilla, canvasContext);
      canvasXInicial = canvasXInicial + tamanioCasilla;
      //console.log(i + "," + j + "=" + t[i][j]);
    }

    canvasXInicial = canvasXOriginal;
    canvasYInicial = canvasYOriginal + tamanioCasilla;
  }

  return t;
}

function crearCulebritaInicial() {
  var xCentral = parseInt(tablero.length / 2);
  var yCentral = xCentral;

  for (var i = 0; i < TAMANIO_INICIAL_CULEBRITA; i++) {
    culebra.casillas.push(tablero[xCentral][yCentral]);
    yCentral = yCentral - 1;
  }

  culebra.pintar();
}

function pintarTablero() {
  for (var i = 0; i < tablero.length; i++) {
    for(var j = 0; j < tablero.length; j++) {
      //console.log("pintando casilla");
      tablero[i][j].pintar(canvasContext);
    }
  }
}

function mover() {
  if(!culebra.avanzar(tablero, nuevaDireccion)) {
    clearInterval(interval);
    alert("Te moriste por llegar al final del tablero");
  }
}

function inializarMovimiento() {
  /*for(var i = 0; i < 5; i++) {
    mover();
  }*/
    interval = setInterval(mover, 1000);
}

function inicializar() {
  //console.log("inicializar");
  tablero = crearTablero(numCasillas, tamanioCasilla,  1, 1);
  this.dibujarMarco();
  this.crearCulebritaInicial();
  this.inializarMovimiento();
}

function cambiarDireccion(event) {
  console.log("keyCode: " + event.keyCode);
  if(TECLAS.RIGTH == event.keyCode || TECLAS.LEFT == event.keyCode || TECLAS.UP == event.keyCode || TECLAS.DOWN == event.keyCode) {
    nuevaDireccion = event.keyCode;
  }
  else {
    console.log("tecla inválida");
  }
}

inicializar();

/*imprimirCulebra() {
  for(var i = 0; i < tablero.length; i++) {
    for(var j = 0; j < tablero.length; j++) {
      log.console(tablero[i][j]);
    }
  }
}*/

//pintarTablero();
