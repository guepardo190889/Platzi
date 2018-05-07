class Culebra {
  constructor() {
    this.casillas = [];
  }

  pintar() {
    for (var i = 0; i < this.casillas.length; i++) {
      if(!this.casillas[i].pintado) {
        this.casillas[i].pintar();
      }
    }
  }

  getCabeza() {
    return this.casillas[0];
  }

  avanzar(tablero, direccion) {
    var avanzar = false;
    var cabeza = this.getCabeza();
    console.log("cabeza: " + cabeza.imprimir());

    var nuevaCabeza = null;

    if(TECLAS.UP == direccion) {
        if(this.puedoAvanzarArriba()) {
          avanzar = true;
          nuevaCabeza = tablero[cabeza.tableroY - 1][cabeza.tableroX];
        }
    }
    else if(TECLAS.DOWN == direccion) {
      if(this.puedoAvanzarAbajo(tablero)) {
        avanzar = true;
        nuevaCabeza = tablero[cabeza.tableroY + 1][cabeza.tableroX];
      }
    }
    else if(TECLAS.LEFT == direccion) {
      if(this.puedoAvanzarIzquierda()) {
        avanzar = true;
        nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX - 1];
      }
    }
    else if(TECLAS.RIGTH == direccion) {
      if(this.puedoAvanzarDerecha(tablero)) {
        avanzar = true;
        nuevaCabeza = tablero[cabeza.tableroY][cabeza.tableroX + 1];
      }
    }

    if(avanzar) {
      //console.log("nuevaCabeza: " + nuevaCabeza);

      this.casillas.unshift(nuevaCabeza);
      this.borrarUltimo();
      this.pintar();
    }
    
    return avanzar;
  }

  puedoAvanzarArriba() {
    return this.getCabeza().tableroY - 1 >= 0;
  }

  puedoAvanzarAbajo(tablero) {
    return this.getCabeza().tableroY + 1 <= tablero.length - 1;
  }

  puedoAvanzarIzquierda() {
    return this.getCabeza().tableroX - 1 >= 0;
  }

  puedoAvanzarDerecha(tablero) {
    var cabeza = this.getCabeza();
    //console.log("avanzarDerecha-> cabeza.tableroX =" + cabeza.tableroX + ", tamanio: " + tablero.length);
    return this.getCabeza().tableroX + 1 <= tablero.length - 1;
  }

  borrarUltimo() {
    this.casillas [this.casillas.length - 1].limpiar();
    this.casillas.pop();
  }

}
