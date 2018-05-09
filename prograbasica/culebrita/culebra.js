class Culebra {
  constructor() {
    this.casillas = [];
    this.direccion = TECLAS.RIGTH;
  }

  pintar() {
    for (var i = 0; i < this.casillas.length; i++) {
      if (!this.casillas[i].pintado) {
        this.casillas[i].pintar(false);
      }
    }
  }

  getCabeza() {
    return this.casillas[0];
  }

  imprimirDireccion(direccion) {
    var dir = "";
    if (TECLAS.UP == direccion) {
      dir = "ARRIBA";
    } else if (TECLAS.DOWN == direccion) {
      dir = "ABAJO";
    } else if (TECLAS.LEFT == direccion) {
      dir = "IZQUIERDA";
    } else if (TECLAS.RIGTH == direccion) {
      dir = "DERECHA";
    }

    return dir;
  }

  getNuevaCabeza(tablero, cabeza) {
    //console.log("obteniendo nueva cabeza");
    //console.log("dirección: " + this.imprimirDireccion(this.direccion));
    //console.log("cabeza actual: " + cabeza.imprimir());

    var nuevaCabeza;
    if (TECLAS.UP == this.direccion) {
      nuevaCabeza = tablero[cabeza.tableroY - 1][cabeza.tableroX];
      //console.log("nueva cabeza " + this.imprimirDireccion(this.direccion) + " obtenida");
    } else if (TECLAS.DOWN == this.direccion) {
      nuevaCabeza = tablero[cabeza.tableroY + 1][cabeza.tableroX];
      //console.log("nueva cabeza " + this.imprimirDireccion(this.direccion) + " obtenida");
    } else if (TECLAS.LEFT == this.direccion) {
      nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX - 1];
      //console.log("nueva cabeza " + this.imprimirDireccion(this.direccion) + " obtenida");
    } else if (TECLAS.RIGTH == this.direccion) {
      nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX + 1];
      //console.log("nueva cabeza " + this.imprimirDireccion(this.direccion) + " obtenida");
    }

    //console.log("nueva cabeza: " + nuevaCabeza.imprimir());
    return nuevaCabeza;
  }

  mover(tablero) {
    var avanzar = true;
    var cabeza = this.getCabeza();
    var nuevaCabeza;
    //console.log("cabeza: " + cabeza.imprimir());

    if(!this.chocoConParedAlAvanzar(tablero, cabeza)) {
      nuevaCabeza = this.getNuevaCabeza(tablero, cabeza);

      if(this.chocoConmigoMismoAlAvanzar(nuevaCabeza)) {
        avanzar = false;
        imprimirMensaje("Has chocado contra tí mismo!", "red");
      }
    }
    else {
      avanzar = false;
      imprimirMensaje("Has chocado contra el tablero!", "red");
    }

    if (avanzar) {
      nuevaCabeza.cabeza = true;
      this.limpiarCabezas();
      cabeza.pintar(true);
      //console.log("nuevaCabeza: " + nuevaCabeza);
      this.casillas.unshift(nuevaCabeza);

      if(nuevaCabeza.comida) {
        nuevaCabeza.comida = false;

        if(!this.isNivelCompletado(tablero)) {
          this.generarComida(tablero);
        }

        nuevaCabeza.pintar(true);
      }
      else {
        this.borrarCola();
      }

      this.pintar();
    }

    return avanzar;
  }

  isNivelCompletado(tablero) {
    //console.log("nivelCompletado: " + this.casillas.length + "," + (tablero.length*tablero.length) + "->" + (this.casillas.length == tablero.length*tablero.length));
    return this.casillas.length == tablero.length*tablero.length;
  }

  limpiarCabezas() {
    for (var i = 0; i < this.casillas.length; i++) {
      this.casillas[i].cabeza = false;
    }
  }

  avanzar(tablero, nuevaDireccion) {
    //console.log("avanzando en dirección: " + this.imprimirDireccion(this.direccion));
    //console.log("nuevaDireccion: " + this.imprimirDireccion(nuevaDireccion));

    this.determinarDireccionASeguir(nuevaDireccion);

    return this.mover(tablero);
  }

  determinarDireccionASeguir(nuevaDireccion) {
    if(this.puedoIrEnEsaDireccion(nuevaDireccion)) {
      this.direccion = nuevaDireccion;
    }
  }

  puedoIrEnEsaDireccion(nuevaDireccion) {
    return !((TECLAS.DOWN == this.direccion && TECLAS.UP == nuevaDireccion) ||
      (TECLAS.UP == this.direccion && TECLAS.DOWN == nuevaDireccion) ||
      (TECLAS.RIGTH == this.direccion && TECLAS.LEFT == nuevaDireccion) ||
      (TECLAS.LEFT == this.direccion && TECLAS.RIGTH == nuevaDireccion));
  }

  chocoConParedAlAvanzar(tablero, cabeza) {
    //console.log("chocoConPared según cabeza: " + cabeza.imprimir());
    var puedoAvanzar = true;
    if (TECLAS.UP == this.direccion) {
      puedoAvanzar = cabeza.tableroY - 1 >= 0;
    } else if (TECLAS.DOWN == this.direccion) {
      puedoAvanzar = cabeza.tableroY + 1 <= tablero.length - 1;
    } else if (TECLAS.LEFT == this.direccion) {
      puedoAvanzar = cabeza.tableroX - 1 >= 0;
    } else if (TECLAS.RIGTH == this.direccion) {
      puedoAvanzar = cabeza.tableroX + 1 <= tablero.length - 1;
    }
    //console.log("puedoAvanzar: " + puedoAvanzar);
    return !puedoAvanzar;
  }

  chocoConmigoMismoAlAvanzar(nuevaCabeza) {
    var chocoConmigoMismo = false;
    for(var i = 0; i < this.casillas.length; i++) {
      var cuerpo = this.casillas[i];

      if(cuerpo.tableroX == nuevaCabeza.tableroX && cuerpo.tableroY == nuevaCabeza.tableroY) {
        chocoConmigoMismo = true;
        break;
      }
    }

    return chocoConmigoMismo;
  }

  borrarCola() {
    this.casillas[this.casillas.length - 1].limpiar();
    this.casillas[this.casillas.length - 1].pintado = false;
    this.casillas.pop();
  }

  generarComida(tablero) {
    //console.log("Generando comida");
    //console.log("tablero: " +  tablero);

    var generada = false;

    while(!generada) {
      var comidaX = aleatorio(0,tablero.length - 1);
      var comidaY = aleatorio(0,tablero.length - 1);

      //console.log("comida: " + comidaX + "," + comidaY);

      if(!tablero[comidaY][comidaX].pintado) {
        tablero[comidaY][comidaX].comida = true;
        tablero[comidaY][comidaX].pintar(false);
        generada = true;
      }
    }
  }

  getComidas() {
    var comidas = this.casillas.length; // - TAMANIO_INICIAL_CULEBRITA;
    if(comidas < 0) {
      comidas = 0;
    }
    return comidas;
  }

  imprimir() {
    var str = "casillas:" + this.casillas +
    ", direccion:" + this.direccion;
    return str;
  }

}
