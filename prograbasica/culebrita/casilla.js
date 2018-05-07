class Casilla {
  constructor(tableroX, tableroY, canvasX, canvasY, tamanio, canvas) {
    this.tableroX = tableroX;
    this.tableroY = tableroY;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.pintado = false;
    this.comida = false;
    this.tamanio = tamanio;
    this.canvas = canvas;
  }

  pintar() {
    console.log("pintando: " + this.imprimir());
    var canvasXOrigen = this.canvasX;
    var canvasYOrigen = this.canvasY;
    var canvasXDestino = canvasXOrigen + this.tamanio;

    if(!this.pintado) {
      for (var i = 0; i < this.tamanio; i++) {
        //console.log("draw: " + canvasXOrigen+","+canvasYOrigen+","+canvasXDestino+","+canvasYOrigen);
        this.dibujar(canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen, "black");
        canvasYOrigen = canvasYOrigen + 1;
      }

      this.pintado = true;
    }

    console.log("pintado: " + this.imprimir());
  }

  dibujar(xInicial, yInicial, xFinal, yFinal, color) {
    //console.log("dibujando: xInicial: " + xInicial + ", yInicial: " + yInicial + ", xFinal: " + xFinal + ", yFinal: " + yFinal);
    this.canvas.beginPath();
    this.canvas.strokeStyle = color;
    this.canvas.lineWidth = 1;
    this.canvas.moveTo(xInicial, yInicial);
    this.canvas.lineTo(xFinal, yFinal);
    this.canvas.stroke();
    this.canvas.closePath();
  }

  limpiar() {
    console.log("limpiando: " + this.imprimir());
    /*var canvasXOrigen = this.canvasX;
    var canvasYOrigen = this.canvasY;
    var canvasXDestino = canvasXOrigen + this.tamanio;

    for (var i = 0; i < this.tamanio; i++) {
      //console.log("clear: " + canvasXOrigen+","+canvasYOrigen+","+canvasXDestino+","+canvasYOrigen);
      this.canvas.clearRect(canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
      canvasYOrigen = canvasYOrigen + 1;
    }*/

    //console.log("clear: " + this.canvasX+","+this.canvasY+","+(this.canvasX + this.tamanio)+","+(this.canvasY + this.tamanio));
    this.canvas.clearRect(this.canvasX, this.canvasY - 1, this.tamanio, this.tamanio + 1);
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
