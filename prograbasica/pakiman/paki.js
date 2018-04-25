var IMAGENES = [];
IMAGENES["Cauchin"] = "vaca.png";
IMAGENES["Pokacho"] = "pollo.png";
IMAGENES["Tocinauro"] = "cerdo.png";

class Pakiman {
  constructor(nombre,vida, ataque){
    this.nombre = nombre;
    this.vida = vida;
    this.ataque = ataque;
    this.imagen = new Image();
    this.imagen.src = IMAGENES[this.nombre];
  }

  hablar() {
    alert(this.nombre);
  }

  mostrar() {
    
  }

}

var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);

//console.log(cauchin, pokacho, tocinauro);

//pokacho.hablar();
