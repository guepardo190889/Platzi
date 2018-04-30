class Culebra {
  constructor() {
    this.casillas = [];
  }

  pintar() {
    console.log("pintando culebra");

    for (var i = 0; i < this.casillas.length; i++) {
      console.log("casilla: " + this.casillas [i].imprimir());
      this.casillas[i].pintar();
    }
  }

  getCabeza() {
    return this.casillas[0];
  }

  actualizarSiguienteAnterior() {
    //inicializar siguiente y anterior
    for(var i = 0; i < this.casillas.length; i++){
      var casilla = this.casillas[i];
      if(i < this.casillas.length - 1) {
        casilla.anterior = this.casillas[i+1];
      }
      if(i > 0) {
        casilla.siguiente = this.casillas[i - 1];
      }
    }
  }

  agregarNuevaCabeza(cabeza) {
    //agregar cabeza al principio
    this.casillas.unshift(cabeza);
    //cabeza no tiene siguiente
    this.casillas[0].siguiente = null;
    this.actualizarSiguienteAnterior();
    //nueva cola no tiene anterior
    this.casillas[this.casillas.length - 2].anterior = null;
    this.casillas[this.casillas.length - 1].limpiarSiguienteAnterior();
    this.pintar();
    //Remover cola anterior
    this.casillas.pop();
  }

}
