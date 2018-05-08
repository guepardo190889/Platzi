class Tablero {
  constructor(numCasillas, tamanioCasilla, tamanioInicialCulebrita, canvasXInicial, canvasYInicial, canvasContext, canvasWidth, canvasHeight) {
    this.numCasillas = numCasillas;
    this.tamanioCasilla = tamanioCasilla;
    this.tamanioInicialCulebrita = tamanioInicialCulebrita;
    this.canvasXInicial = canvasXInicial;
    this.canvasYInicial = canvasYInicial;
    this.canvas = canvasContext;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.tablero = [];
    this.culebra = new Culebra();
    this.nuevaDireccion = TECLAS.RIGTH;
  }

  dibujarMarco() {
    dibujar(this.canvas, "black", 1, 1, canvas.width - 1, 1); //línea superior
    dibujar(this.canvas, "black", canvas.width - 1, 0, canvas.width - 1, canvas.height - 1); //línea lateral derecha
    dibujar(this.canvas, "black", canvas.width - 1, canvas.height - 1, 0, canvas.height - 1); //línea inferior
    dibujar(this.canvas, "black", 0, canvas.height - 1, 1, 1); //línea lateral izquierda
  }

  crearTablero() {
    this.tablero = new Array(this.numCasillas)

    for(var i = 0; i < this.numCasillas; i++) {
      this.tablero[i] = new Array(this.numCasillas);

      var canvasXOriginal = this.canvasXInicial;
      var canvasYOriginal = this.canvasYInicial;

      for(var j=0; j < this.numCasillas; j++) {
        //console.log(x+","+y);
        this.tablero[i][j] = new Casilla(j, i, this.canvasXInicial, this.canvasYInicial, this.tamanioCasilla, this.canvas);
        this.canvasXInicial = this.canvasXInicial + this.tamanioCasilla;
        //console.log(i + "," + j + "=" + t[i][j]);
      }

      this.canvasXInicial = canvasXOriginal;
      this.canvasYInicial = canvasYOriginal + this.tamanioCasilla;
    }
  }

  crearCulebritaInicial() {
    var xCentral = parseInt(this.tablero.length / 2);
    var yCentral = xCentral;

    for (var i = 0; i < this.tamanioInicialCulebrita; i++) {
      this.culebra.casillas.push(this.tablero[xCentral][yCentral]);
      yCentral = yCentral - 1;
    }

    this.culebra.pintar();
  }

  pintar(canvas) {
    for (var i = 0; i < this.tablero.length; i++) {
      for(var j = 0; j < this.tablero.length; j++) {
        //console.log("pintando casilla");
        this.tablero[i][j].pintar();
      }
    }
  }

  mover() {
    return this.culebra.avanzar(this.tablero, this.nuevaDireccion);
  }

  inicializar() {
    //console.log("inicializar");
    this.crearTablero();
    this.dibujarMarco();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
  }



}
