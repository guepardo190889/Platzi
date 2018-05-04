var TAMANIO_INICIAL_CULEBRITA = 3;

var canvas = document.getElementById("canvas");
//canvas.addEventListener("mousedown", comenzarDibujo);
//canvas.addEventListener("mouseup", terminarDibujo);
//canvas.addEventListener("mousemove", dibujarConMouse);

var canvasContext = canvas.getContext("2d");

var numCasillas = 50;
var tamanioCasilla = 10;
var tablero = [];
var culebra = new Culebra();

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

  //inicializar siguiente y anterior
  for(var i = 0; i < TAMANIO_INICIAL_CULEBRITA; i++){
    var casilla = culebra.casillas[i];
    if(i < TAMANIO_INICIAL_CULEBRITA - 1) {
      casilla.anterior = culebra.casillas[i+1];
    }
    if(i > 0) {
      casilla.siguiente = culebra.casillas[i - 1];
    }
  }
}

function pintarTablero() {
  for (var i = 0; i < tablero.length; i++) {
    for(var j = 0; j < tablero.length; j++) {
      //console.log("pintando casilla");
      tablero[i][j].pintar(canvasContext);
    }
  }
}

function inicializar() {
  tablero = crearTablero(numCasillas, tamanioCasilla,  1, 1);
}

function avanzarDerecha() {
    var cabeza = culebra.getCabeza();
    //console.log("cabeza: " + cabeza.imprimir());
    //console.log("cc nueva cabeza: " + (cabeza.tableroX + 1)   + "," + cabeza.tableroY);

    //Validar que puedo seguir avanzando
    var nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX + 1];
    //console.log("nuevaCabeza: " + nuevaCabeza.imprimir());
    culebra.agregarNuevaCabeza(nuevaCabeza);
}

function puedoAvanzarDeracha(casilla) {

}

function moverSerpiente() {
    setInterval(avanzarDerecha, 1000);
}

inicializar();
dibujarMarco();
crearCulebritaInicial();

culebra.pintar();

moverSerpiente();

/*imprimirCulebra() {
  for(var i = 0; i < tablero.length; i++) {
    for(var j = 0; j < tablero.length; j++) {
      log.console(tablero[i][j]);
    }
  }
}*/

//pintarTablero();
