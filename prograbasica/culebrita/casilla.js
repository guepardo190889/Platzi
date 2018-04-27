class Casilla {
  constructor(tableroX, tableroY, canvasX, canvasY) {
    this.tableroX = tableroX;
    this.tableroY = tableroY;
    this.canvasX = canvasX;
    this.canvasY = canvasY;
    this.pintado = false;
    this.tamanio = 10;
  }

  pintar(tablero) {
    for (var i = 0; i < this.tamanio; i++) {
      tablero.beginPath();
      tablero.strokeStyle = "black";
      tablero.lineWidth = 1;
      tablero.moveTo(this.canvasX, this.canvasY + 1);
      tablero.lineTo(this.canvasX + this.tamanio, this.canvasY + 1);
      tablero.stroke();
      tablero.closePath();
    }
  }
}
