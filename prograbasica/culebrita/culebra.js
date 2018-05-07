class Culebra {
  constructor() {
    this.casillas = [];
    this.direccion = TECLAS.RIGTH;
  }

  pintar() {
    for (var i = 0; i < this.casillas.length; i++) {
      if (!this.casillas[i].pintado) {
        this.casillas[i].pintar();
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

  mover() {
    var avanzar = true;
    var cabeza = this.getCabeza();
    var nuevaCabeza = null;
    //console.log("cabeza: " + cabeza.imprimir());

    if (TECLAS.UP == this.direccion) {
      if (this.puedoAvanzarArriba()) {
        nuevaCabeza = tablero[cabeza.tableroY - 1][cabeza.tableroX];
      } else {
        avanzar = false;
      }
    } else if (TECLAS.DOWN == this.direccion) {
      if (this.puedoAvanzarAbajo(tablero)) {
        nuevaCabeza = tablero[cabeza.tableroY + 1][cabeza.tableroX];
      } else {
        avanzar = false;
      }
    } else if (TECLAS.LEFT == this.direccion) {
      if (this.puedoAvanzarIzquierda()) {
        nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX - 1];
      } else {
        avanzar = false;
      }
    } else if (TECLAS.RIGTH == this.direccion) {
      if (this.puedoAvanzarDerecha(tablero)) {
        nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX + 1];
      } else {
        avanzar = false;
      }
    }

    if (avanzar) {
      //console.log("nuevaCabeza: " + nuevaCabeza);
      this.casillas.unshift(nuevaCabeza);
      this.borrarUltimo();
      this.pintar();
    }

    return avanzar;
  }

  avanzar(tablero, nuevaDireccion) {
    console.log("avanzando en dirección: " + this.imprimirDireccion(this.direccion));
    console.log("nuevaDireccion: " + this.imprimirDireccion(nuevaDireccion));

    var avanzar = true;

    if(this.puedoIrEnEsaDireccion(nuevaDireccion)) {
      this.direccion = nuevaDireccion;
      avanzar = this.mover();
    }
    else {
      avanzar = this.mover();
    }

    return avanzar;
  }

  puedoIrEnEsaDireccion(nuevaDireccion) {
    return !((TECLAS.DOWN == this.direccion && TECLAS.UP == nuevaDireccion) ||
      (TECLAS.UP == this.direccion && TECLAS.DOWN == nuevaDireccion) ||
      (TECLAS.RIGTH == this.direccion && TECLAS.LEFT == nuevaDireccion) ||
      (TECLAS.LEFT == this.direccion && TECLAS.RIGTH == nuevaDireccion));
  }

  puedoAvanzarArriba() {
    //console.log("avanzarArriba-> cabeza.tableroY =" + this.getCabeza().tableroY + ", tamanio: " + tablero.length);
    return this.getCabeza().tableroY - 1 >= 0;
  }

  puedoAvanzarAbajo(tablero) {
    return this.getCabeza().tableroY + 1 <= tablero.length - 1;
  }

  puedoAvanzarIzquierda() {
    return this.getCabeza().tableroX - 1 >= 0;
  }

  puedoAvanzarDerecha(tablero) {
    //console.log("avanzarDerecha-> cabeza.tableroX =" + cabeza.tableroX + ", tamanio: " + tablero.length);
    return this.getCabeza().tableroX + 1 <= tablero.length - 1;
  }

  borrarUltimo() {
    this.casillas[this.casillas.length - 1].limpiar();
    this.casillas.pop();
  }

  generarComida(tablero) {
    var generada = false;

    while(!generada) {
      var comidaX = aleatorio(0,tablero.length);
      var comidaY = aleatorio(0,tablero.length);

      console.log("comida: " + comidaX + "," + comidaY);

      if(!tablero[comidaY][comidaX].pintado) {
        tablero[comidaY][comidaX].comida = true;
        tablero[comidaY][comidaX].pintar();
        generada = true;

      }
    }
  }

}
