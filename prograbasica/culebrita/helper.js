function dibujar(canvas, color, xInicial, yInicial, xFinal, yFinal) {
  //console.log("dibujando: xInicial: " + xInicial + ", yInicial: " + yInicial + ", xFinal: " + xFinal + ", yFinal: " + yFinal);
  canvas.beginPath();
  canvas.strokeStyle = color;
  canvas.lineWidth = 1;
  canvas.moveTo(xInicial, yInicial);
  canvas.lineTo(xFinal, yFinal);
  canvas.stroke();
  canvas.closePath();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min +1)) + min;
}

function imprimirMensaje(mensaje, color) {
  document.getElementById("p_mensajes").innerHTML = mensaje;
  document.getElementById("p_mensajes").style.color = color;
}

function imprimirMensajeEspecial(mensaje, color) {
  document.getElementById("p_mensajeEspecial").innerHTML = mensaje;
  document.getElementById("p_mensajeEspecial").style.color = color;
}
