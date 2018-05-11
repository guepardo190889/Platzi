class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = valor;
  }
}

var caja = [];
var entregado = [];

caja.push(new Billete(50,3));
caja.push(new Billete(20,3));
caja.push(new Billete(10,2));

var dinero = 210;
var div = 0;
var papeles = 0;

var boton_extraer = document.getElementById("ib_extraer");
boton_extraer.addEventListener("click");

function entregarDinero() {
  for(var billete of caja) {
    console.log("billete: " + billete);
  }
}
