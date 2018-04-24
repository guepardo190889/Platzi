document.addEventListener("keydown", dibujarTeclado);

var canvas = document.getElementById("area_de_dibujo");
var tablero = canvas.getContext("2d");

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGTH: 39
};

var x = 150;
var y = 150;

dibujarPuntoInicial();

function dibujarPuntoInicial() {
  dibujarLinea("red", x-1, y-1, x+1, y+1);
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  tablero.beginPath();
  tablero.strokeStyle = color;
  tablero.lineWidth = 3;
  tablero.moveTo(xInicial, yInicial);
  tablero.lineTo(xFinal, yFinal);
  tablero.stroke();
  tablero.closePath();
}

function dibujarTeclado(event) {
  var colorLinea = "green";
  var movimiento = 1;

  switch (event.keyCode) {
    case teclas.UP:
      dibujarLinea(colorLinea, x, y, x, y - movimiento);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      dibujarLinea(colorLinea, x, y, x, y + movimiento);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarLinea(colorLinea, x, y, x - movimiento, y);
      x = x - movimiento
      break;
    case teclas.RIGTH:
      dibujarLinea(colorLinea, x, y, x + movimiento, y);
      x = x + movimiento
      break;
    default:
      console.log("OTRA TECLA NO DEFINIDA");
      break;
  }

}
