class Casilla {
  constructor(tableroX, tableroY, canvasX, canvasY, tamanio, canvas) {
    this.tableroX = tableroX;
    this.tableroY = tableroY;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.pintado = false;
    this.tamanio = tamanio;
    this.canvas = canvas;
  }

  pintar() {
    //console.log("pintando: " + this.tableroX + "," + this.tableroY);
    var canvasXOrigen = this.canvasX;
    var canvasYOrigen = this.canvasY;
    var canvasXDestino = canvasXOrigen + this.tamanio;

    for (var i = 0; i < this.tamanio; i++) {
      if(this.pintado) {}
      this.dibujar(canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
      canvasYOrigen = canvasYOrigen + 1;
    }

    this.pintando = true;
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

  limpiar() {
    //this.canvas.clearRect(this.canvasX, this.canvasY, this.canvasX + this.tamanio, this.canvasY + this.tamanio);
    this.pintado = false;
  }

  imprimir() {
    var str = "tableroX:" + this.tableroX +
    ", tableroY:" + this.tableroY +
    ", canvasX:" + this.canvasX +
    ", canvasY:" + this.canvasY +
    ", pintado:" + this.pintado +
    ", tamanio:" + this.tamanio;

    return str;
  }
}
