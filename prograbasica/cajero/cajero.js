class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

function entregarDinero() {
  var text_dinero = document.getElementById("in_dinero");
  dinero = parseInt(text_dinero.value);

  for(var billete of caja) {
    if(dinero > 0) {
      div = Math.floor(dinero / billete.valor);

      if(div > billete.cantidad) {
        papeles = billete.cantidad;
      }
      else {
        papeles = div;
      }

      entregado.push(new Billete(billete.valor, papeles));

      dinero = dinero - (billete.valor * papeles);
    }
  }

  if(dinero > 0) {
    p_resultado.innerHTML = "No puedo entregarte esa cantidad";
  }
  else {
    for(var billete_entregado of entregado) {
      if(billete_entregado.cantidad > 0) {
        p_resultado.innerHTML += billete_entregado.cantidad + " billetes de $" + billete_entregado.valor + "<br/>";
      }
    }
  }
}

var caja = [];
var entregado = [];

caja.push(new Billete(1000,4));
caja.push(new Billete(500,8));
caja.push(new Billete(200,15));
caja.push(new Billete(100,10));
caja.push(new Billete(50,20));

var dinero = 0;
var div = 0;
var papeles = 0;

var p_resultado = document.getElementById("p_resultado");
var boton_extraer = document.getElementById("ib_extraer");
boton_extraer.addEventListener("click", entregarDinero);
