var canvas = document.getElementById("canvas");
//canvas.addEventListener("mousedown", comenzarDibujo);
//canvas.addEventListener("mouseup", terminarDibujo);
//canvas.addEventListener("mousemove", dibujarConMouse);

var canvasContext = canvas.getContext("2d");
var tamanioCulebritaInicial = 3;




dibujarTablero();

dibujarCulebritaInicial();

function dibujarTablero() {
  dibujarLinea("black", 0, 0, canvas.width, 0);
  dibujarLinea("black", canvas.width, 0, canvas.width, canvas.height);
  dibujarLinea("black", canvas.width, canvas.width, 0, canvas.height);
  dibujarLinea("black", 0, canvas.height, 0, 0);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  tablero.beginPath();
  tablero.strokeStyle = color;
  tablero.lineWidth = 1;
  tablero.moveTo(xInicial, yInicial);
  tablero.lineTo(xFinal, yFinal);
  tablero.stroke();
  tablero.closePath();
}

function dibujarCulebritaInicial() {
  //obtener el punto medio del tablero
  dibujarPunto(300, 300);
}

function dibujarPunto(xInicial, yInicial) {
  for (var i = 0; i < tamanioCubo; i++) {
    dibujarLinea("blue", xInicial, yInicial + i, xInicial + tamanioCubo, yInicial + i);
  }
}
