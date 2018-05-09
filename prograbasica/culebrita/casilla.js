class Casilla {
  constructor(tableroX, tableroY, canvasX, canvasY, tamanio, canvasContext) {
    this.tableroX = tableroX;
    this.tableroY = tableroY;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.pintado = false;
    this.comida = false;
    this.cabeza = false;
    this.tamanio = tamanio;
    this.canvas = canvasContext;
  }

  pintar(forzarPintado) {
    //console.log("pintando: " + this.imprimir());
    var canvasXOrigen = this.canvasX;
    var canvasYOrigen = this.canvasY;
    var canvasXDestino = canvasXOrigen + this.tamanio;

    if(forzarPintado) {
      this.limpiar();
    }

    if(!this.pintado || forzarPintado) {
      for (var i = 0; i < this.tamanio; i++) {
        //console.log("draw: " + canvasXOrigen+","+canvasYOrigen+","+canvasXDestino+","+canvasYOrigen);
        if(this.comida){
          dibujar(this.canvas, "red", canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
        }
        else if(this.cabeza) {
          dibujar(this.canvas, "black", canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
        }
        else {
          dibujar(this.canvas, "gray", canvasXOrigen, canvasYOrigen, canvasXDestino, canvasYOrigen);
        }

        canvasYOrigen = canvasYOrigen + 1;
      }

      this.pintado = true;
    }

    //console.log("pintado: " + this.imprimir());
  }

  limpiar() {
    //console.log("limpiando: " + this.imprimir());

    //console.log("clear: " + this.canvasX+","+this.canvasY+","+(this.canvasX + this.tamanio)+","+(this.canvasY + this.tamanio));
    this.canvas.clearRect(this.canvasX, this.canvasY - 1, this.tamanio, this.tamanio + 1);
    //this.pintado = false;
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
