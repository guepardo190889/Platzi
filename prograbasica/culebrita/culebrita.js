document.addEventListener("keydown", cambiarDireccion);

var tablero = new Tablero();
var interval = 0;

var btn_reiniciarNivel = document.getElementById("input_buton_reiniciarNivel");
btn_reiniciarNivel.addEventListener("click", reiniciarNivel);

var btn_siguienteNivel = document.getElementById("input_buton_siguienteNivel");
btn_siguienteNivel.addEventListener("click", siguienteNivel);

function reiniciarNivel() {
  tablero.reiniciarNivel();
  comenzarJuego();
}

function siguienteNivel() {
  if(tablero.validaSiguienteNivel()) {
    comenzarJuego();
  }
}

function cambiarDireccion(event) {
  //console.log("keyCode: " + event.keyCode);
  if(TECLAS.RIGTH == event.keyCode || TECLAS.LEFT == event.keyCode || TECLAS.UP == event.keyCode || TECLAS.DOWN == event.keyCode) {
    tablero.nuevaDireccion = event.keyCode;
  }
  else {
    //console.log("tecla inválida");
  }
}

function jugar() {
  var detenerInterval = tablero.mover();
  //console.log("avanzar: " + avanzar);
  tablero.imprimirNivel();

  if(detenerInterval) {
    tablero.detenido = true;
    clearInterval(interval);
  }
}

function comenzarJuego() {
  //for(var i = 0; i < 25; i++) {
    //tablero.mover();
  //}
  tablero.detenido = false;
  //console.log("velocidadInicial: " + tablero.velocidadInicial);
  interval = setInterval(jugar, tablero.velocidadInicial);
}

tablero.inicializar();
comenzarJuego();
