class Tablero {
  constructor() {
    this.nivel = 1;
    this.numCasillas = this.nivel * CASILLAS_POR_NIVEL;
    this.tamanioCasilla = 10;
    this.canvasXInicial = 3;
    this.canvasYInicial = 3;
    this.canvas;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.tablero = [];
    this.culebra = new Culebra();
    this.nuevaDireccion = TECLAS.RIGTH;
    this.velocidadInicial = VELOCIDAD_INICIAL;
    this.jugadorActual = "Desconocido";
    this.jugadores = [];
  }

  crearTablero() {
    console.log("crearTablero");
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
    console.log("crearCulebritaInicial");
    var xCentral = parseInt(this.tablero.length / 2);
    var yCentral = xCentral;

    //console.log("culebraInicial: " + xCentral + "," + yCentral);

    for (var i = 0; i < TAMANIO_INICIAL_CULEBRITA; i++) {
      this.culebra.casillas.push(this.tablero[xCentral][yCentral]);

      if(i == 0){
        this.culebra.casillas[i].cabeza = true;
      }

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
    //console.log("velocidadInicial: " + this.velocidadInicial);
    if(this.culebra.isNivelCompletado(this.tablero)) {
      alert("Felicidades" + this.jugadorActual + "! Has completado el nivel " + this.nivel);
      this.casoEspecial();
      this.siguienteNivel();

      return true;
    }
    else {
      return this.culebra.avanzar(this.tablero, this.nuevaDireccion);
    }
  }

  casoEspecial() {
    if(NIVEL_MINIMO_CASO_ESPECIAL == this.nivel && CASO_ESPECIAL_HABILITADO) {
      alert(this.jugadorActual + ", " + MENSAJE_CASO_ESPECIAL);
    }
  }

  dibujarMarco() {
    dibujar(this.canvas, "black", 1, 1, this.canvasWidth - 1, 1); //línea superior
    dibujar(this.canvas, "black", this.canvasWidth - 1, 0, this.canvasWidth - 1, this.canvasHeight - 1); //línea lateral derecha
    dibujar(this.canvas, "black", this.canvasWidth - 1, this.canvasHeight - 1, 0, this.canvasHeight - 1); //línea inferior
    dibujar(this.canvas, "black", 0, this.canvasHeight - 1, 1, 1); //línea lateral izquierda
  }

  imprimirNivel() {
    document.getElementById("strong_nivel").innerHTML = "Nivel: " + this.nivel + "  -  " + (this.jugadorActual);
    document.getElementById("p_detalle_nivel").innerHTML = "Tamaño: " + (this.numCasillas)
    + "<br/>Casillas: " + (this.numCasillas*this.numCasillas)
    + "<br/>Puntos: " + (this.culebra.getComidas());
  }

  dibujaCanvas() {
    console.log("dibujaCanvas");
    var tamanioCanvas = this.nivel * CASILLAS_POR_NIVEL * this.tamanioCasilla;
    var pixelesExtrasParaMarco = 6;

    var canvasDinamico = document.createElement("canvas");
    canvasDinamico.id = "canvasDinamico";
    canvasDinamico.width = tamanioCanvas + pixelesExtrasParaMarco;
    canvasDinamico.height = tamanioCanvas + pixelesExtrasParaMarco;

    document.body.appendChild(canvasDinamico);

    this.canvas = canvasDinamico.getContext("2d");

    this.canvasWidth = canvasDinamico.width;
    this.canvasHeight = canvasDinamico.height;
  }

  guardarJugador() {
    var jugador = prompt("Introduce tu nick");
    if(jugador != null) {
      this.jugadorActual = jugador;
      var nivel = new Nivel();
      nivel.nivel = this.nivel;
      this.maxComida = this.culebra.getComidas();
      this.jugadores[jugador] = nivel;
    }
  }

  limpiarCanvas() {
      this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  quitarCanvas() {
    console.log("quitarCanvas");
    var element = document.getElementById("canvasDinamico");
    element.parentNode.removeChild(element);
  }

  limpiarViarables() {
    this.canvasXInicial = 3;
    this.canvasYInicial = 3;
    this.numCasillas = this.nivel * CASILLAS_POR_NIVEL;
    this.culebra = new Culebra();
    this.nuevaDireccion = TECLAS.RIGTH;
  }

  validaSiguienteNivel() {
    var puedoAvanzarSiguienteNivel = false;

    if(VALIDAR_NIVEL_AL_AVANZAR) {
      if(this.culebra.isNivelCompletado(this.tablero)) {
          this.siguienteNivel();
          puedoAvanzarSiguienteNivel = true;
      }
      else {
        alert("Termina el nivel actual para poder continuar");
      }
    }
    else {
      this.siguienteNivel();
      puedoAvanzarSiguienteNivel = true;
    }

    return puedoAvanzarSiguienteNivel;
  }

  reiniciarNivel() {
    console.log("reiniciarNivel");
    this.limpiarViarables();
    this.limpiarCanvas();
    this.dibujarMarco();
    this.crearTablero();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
    this.imprimirNivel();
    //this.mover();
  }

  siguienteNivel() {
    console.log("siguienteNivel");

    this.nivel = this.nivel + 1;
    this.velocidadInicial = this.nivel * VELOCIDAD_INICIAL;

    this.limpiarViarables();
    this.quitarCanvas();
    this.dibujaCanvas();
    this.dibujarMarco();
    this.crearTablero();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
    this.imprimirNivel();
  }

  inicializar() {
    this.guardarJugador();
    this.imprimirNivel();
    this.dibujaCanvas();
    this.dibujarMarco();
    this.crearTablero();
    this.crearCulebritaInicial();
    this.culebra.generarComida(this.tablero);
  }

}
