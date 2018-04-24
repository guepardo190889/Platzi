document.addEventListener("keyup", dibujarTeclado);

var teclas = {UP:38,DOWN:40,LEFT:37,RIGTH:39};

function dibujarTeclado(event) {
  switch(event.keyCode) {
    case teclas.UP : console.log("TECLA ARRIBA"); break;
    case teclas.DOWN : console.log("TECLA ABAJO"); break;
    case teclas.LEFT : console.log("TECLA IZQUIERDA"); break;
    case teclas.RIGTH : console.log("TECLA DERECHA"); break;
    default : console.log("OTRA TECLA"); break;
  }

}
