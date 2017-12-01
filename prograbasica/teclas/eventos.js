
var teclas = {UP:38,DOWN:40,LEFT:37,RIGTH:39};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(event) {
  if(teclas.UP == event.keyCode) {
    console.log("TECLA ARRIBA");  
  }

}
