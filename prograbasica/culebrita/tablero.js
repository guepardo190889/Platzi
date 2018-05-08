class Tablero {
  constructor(numCasillas, tamanioCasilla, tamanioInicialCulebrita, canvasXInicial, canvasYInicial, canvasContext) {
    this.numCasillas = numCasillas;
    this.tamanioCasilla = tamanioCasilla;
    this.tamanioInicialCulebrita = tamanioInicialCulebrita;
    this.canvasXInicial = canvasXInicial;
    this.canvasYInicial = canvasYInicial;
    this.canvas = canvasContext;
    this.tablero = [];
    this.culebra = new Culebra();
    this.nuevaDireccion = TECLAS.RIGTH;
    this.interval = 0;
  }

  dibujarMarco() {
    dibujar(this.canvas, "black", 0, 0, (this.numCasillas*this.tamanioCasilla)+1, 0);
    dibujar(this.canvas, "black", (this.numCasillas*this.tamanioCasilla)+1, 0, (this.numCasillas*this.tamanioCasilla)+1, (this.numCasillas*this.tamanioCasilla)+1);
    dibujar(this.canvas, "black", (this.numCasillas*this.tamanioCasilla)+1, (this.numCasillas*this.tamanioCasilla)+1, 0, (this.numCasillas*this.tamanioCasilla)+1);
    dibujar(this.canvas, "black", 0, (this.numCasillas*this.tamanioCasilla)+1, 0, 0);
  }

  crearTablero() {
    this.tablero = new Array(this.tamanioTablero)

    for(var i = 0; i < this.tamanioTablero; i++) {
      t[i] = new Array(this.tamanioTablero);

      var canvasXOriginal = this.canvasXInicial;
      var canvasYOriginal = this.canvasYInicial;

      for(var j=0; j < this.tamanioTablero; j++) {
        //console.log(x+","+y);
        t[i][j] = new Casilla(j, i, this.canvasXInicial, this.canvasYInicial, this.tamanioCasilla, this.canvas);
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
    if(!this.culebra.avanzar(this.tablero, this.nuevaDireccion)) {
      clearInterval(this.interval);
      alert("Te moriste por llegar al final del tablero");
    }
  }

  inializarMovimiento() {
    /*for(var i = 0; i < 5; i++) {
      mover();
    }*/
      this.interval = setInterval(this.mover(), 1000);
  }

  inicializar() {
    //console.log("inicializar");
    this.crearTablero();
    this.dibujarMarco();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
    this.inializarMovimiento();
  }



}
