class Casilla {
  constructor(tableroX, tableroY, canvasX, canvasY, tamanio, canvas) {
    this.tableroX = tableroX;
    this.tableroY = tableroY;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.pintado = false;
    this.tamanio = tamanio;
    this.canvas = canvas;
    this.siguiente = null;
    this.anterior = null;
  }

  pintar() {
    //console.log("pintando: " + this.tableroX + "," + this.tableroY);
    var canvasXOrigen = this.canvasX;
    var canvasYOrigen = this.canvasY;
    var canvasXDestino = canvasXOrigen + this.tamanio;

    for (var i = 0; i < this.tamanio; i++) {
      this.dibujar(canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
      canvasYOrigen = canvasYOrigen + 1;
      }
  }

  dibujar(xInicial, yInicial, xFinal, yFinal) {
    //console.log("dibujando: xInicial: " + xInicial + ", yInicial: " + yInicial + ", xFinal: " + xFinal + ", yFinal: " + yFinal);
    this.canvas.beginPath();
    this.canvas.strokeStyle = "black";
    this.canvas.lineWidth = 1;
    this.canvas.moveTo(xInicial, yInicial);
    this.canvas.lineTo(xFinal, yFinal);
    this.canvas.stroke();
    this.canvas.closePath();
  }

  limpiarSiguienteAnterior() {
    this.siguiente = null;
    this.anterior = null;
  }

  imprimir() {
    var str = "tableroX:" + this.tableroX +
    ", tableroY:" + this.tableroY +
    ", canvasX:" + this.canvasX +
    ", canvasY:" + this.canvasY +
    ", pintado:" + this.pintado +
    ", tamanio:" + this.tamanio +
    ", siguiente: " + this.siguiente +
    ", anterior: " + this.anterior;

    return str;
  }
}
