class Tablero {
  constructor() {
    this.nivel = 1;
    this.numCasillas = this.nivel*10;
    this.tamanioCasilla = 10;
    this.tamanioInicialCulebrita = 3;
    this.canvasXInicial = 2;
    this.canvasYInicial = 2;
    this.canvas;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.tablero = [];
    this.culebra = new Culebra();
    this.nuevaDireccion = TECLAS.RIGTH;
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
        //console.log(i + "," + j + "=" + this.tablero[i][j].imprimir());
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

  pintar() {
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

  dibujarMarco() {
    dibujar(this.canvas, "black", 1, 1, this.canvasWidth - 1, 1); //línea superior
    dibujar(this.canvas, "black", this.canvasWidth - 1, 0, this.canvasWidth - 1, this.canvasHeight - 1); //línea lateral derecha
    dibujar(this.canvas, "black", this.canvasWidth - 1, this.canvasHeight - 1, 0, this.canvasHeight - 1); //línea inferior
    dibujar(this.canvas, "black", 0, this.canvasHeight - 1, 1, 1); //línea lateral izquierda
  }

  imprimirNivel() {
    document.getElementById("strong_nivel").innerHTML = "Nivel: " + this.nivel;
    document.getElementById("p_detalle_nivel").innerHTML = "Tamaño: " + (this.nivel * 10) + "<br/>Casillas: " + (this.nivel*10*this.nivel*10) +  "<hr/>";
  }

  dibujaCanvas() {
    var tamanioCanvas = this.nivel*10*10;
    var pixelesExtrasParaMarco = 4;

    var canvasDinamico = document.createElement("canvas");
    canvasDinamico.width = tamanioCanvas + pixelesExtrasParaMarco;
    canvasDinamico.height = tamanioCanvas + pixelesExtrasParaMarco;

    document.body.appendChild(canvasDinamico);

    this.canvas = canvasDinamico.getContext("2d");

    this.canvasWidth = canvasDinamico.width;
    this.canvasHeight = canvasDinamico.height;
  }

  inicializar() {
    //console.log("inicializar");
    this.imprimirNivel();
    this.dibujaCanvas();
    this.crearTablero();
    this.dibujarMarco();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
  }



}
