var IMAGENES = [];
IMAGENES["Cauchin"] = "vaca.png";
IMAGENES["Pokacho"] = "pollo.png";
IMAGENES["Tocinauro"] = "cerdo.png";

var pakidex = [];
pakidex.push(new Pakiman("Cauchin", 100, 30));
pakidex.push(new Pakiman("Pokacho", 80, 50));
pakidex.push(new Pakiman("Tocinauro", 120, 40));

//in es para el índice
//of es para el objeto
for(var p of pakidex) {
  p.mostrar();
}
/*
//Recorrer atributos de un objeto
for(var x in pakidex[0]) {
  console.log(x);
}*/
