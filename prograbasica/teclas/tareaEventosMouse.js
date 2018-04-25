  var canvas = document.getElementById("area_de_dibujo");
  canvas.addEventListener("mousedown", comenzarDibujo);
  canvas.addEventListener("mouseup", terminarDibujo);
  canvas.addEventListener("mousemove", dibujarConMouse);

  var btn_limpiar = document.getElementById("ib_limpiar");
  btn_limpiar.addEventListener("click", limpiarDibujo);

  var ddl_color = document.getElementById("ddl_color");
  ddl_color.addEventListener("change", elegirColor);

  var tablero = canvas.getContext("2d");
  var x = 0;
  var y = 0;
  var dibujar = false;
  var color = "black";

  dibujarTablero();

  function dibujarTablero() {
    dibujarLinea("black", 0, 0, canvas.width, 0);
    dibujarLinea("black", canvas.width, 0, canvas.width, canvas.height);
    dibujarLinea("black", canvas.width, canvas.width, 0, canvas.height);
    dibujarLinea("black", 0, canvas.height, 0, 0);
  }

  function dibujarConMouse(event) {
    if (dibujar) {
      var xFinal = event.layerX;
      var yFinal = event.layerY;

      dibujarLinea(color, x, y, xFinal, yFinal);

      x = xFinal;
      y = yFinal;
    }
  }

  function comenzarDibujo(event) {
    dibujar = true;
    x = event.layerX;
    y = event.layerY;
  }

  function terminarDibujo(event) {
    dibujar = false;
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

  function limpiarDibujo() {
    tablero.clearRect(0, 0, canvas.width, canvas.height);
    dibujarTablero();
    ddl_color.value = "black";
    color = "black";
  }

  function elegirColor(event) {
    console.log(ddl_color.value);
    color = ddl_color.value;
  }
