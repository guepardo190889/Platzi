//Autor: Seth Luis

var SUPERIOR_IZQUIERDA = 1;
var SUPERIOR_DERECHA = 2;
var INFERIOR_IZQUIERDA = 3;
var INFERIOR_DERECHA = 4;

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var posicion = parseInt(prompt("Dónde quieres dibujar? \n 1=superior-izquierda \n 2=superior-derecha \n 3=inferiror-izquierda \n 4=inferior-derecha"));
var intervalo = parseInt(prompt("Cuántos pixeles de separación debe haber entre líneas? (1-20)"));
//console.log("intervalo: " + intervalo);
var numLineas = parseInt(500/intervalo);
//console.log("numLineas: " + numLineas);
var xInicial,yInicial,xFinal,yFinal;

if(intervalo > 0 && intervalo <= 20) {
	if(SUPERIOR_IZQUIERDA == posicion) {
		yInicial = 500
		xFinal = 0;
		for(i = 0; i < numLineas; i++) {
			yInicial = yInicial - intervalo;
			xFinal = xFinal + intervalo;
			dibujaLinea("red", 0, yInicial, xFinal, 0);
		}
		dibujaLinea("black", 1, 1, 499, 1);
		dibujaLinea("black", 1, 1, 1, 499);
	}
	else if(SUPERIOR_DERECHA == posicion) {
		yInicial = 500;
		xFinal = 500;
		for(i = 0; i < numLineas; i++) {
			yInicial = yInicial - intervalo;
			xFinal = xFinal - intervalo;
			dibujaLinea("red", 500, yInicial, xFinal, 0);
		}
		dibujaLinea("black", 1, 1, 499, 1);
		dibujaLinea("black", 499, 499, 499, 1);
	}
	else if(INFERIOR_IZQUIERDA == posicion) {
		yInicial = 0;
		xFinal = 0;
		for(i = 0; i < numLineas; i++) {
			yInicial = yInicial + intervalo;
			xFinal = xFinal + intervalo;
			dibujaLinea("red", 0, yInicial, xFinal, 500);
		}
		dibujaLinea("black", 1, 1, 1, 499);
		dibujaLinea("black", 1, 499, 499, 499);
	}
	else if(INFERIOR_DERECHA == posicion) {
		yInicial = 0;
		xFinal = 500
		for(i = 0; i < numLineas; i++) {
			yInicial = yInicial + intervalo;
			xFinal = xFinal - intervalo;
			dibujaLinea("red", 500, yInicial, xFinal, 500);
		}
		dibujaLinea("black", 499, 1, 499, 499);
		dibujaLinea("black", 1, 499, 499, 499);
	}
	else {
		alert("Estás tonto. Aprende a seguir instrucciones. La posición es de 1 a 4");
	}
}
else {
	alert("Hombre!!! Los pixeles son de 1 a 20!!!");
}

function dibujaLinea(c, xi, yi, xf, yf){
	//console.log(xi,yi,xf,yf);
	lienzo.beginPath();
	lienzo.strokeStyle = c;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(xf,yf);
	lienzo.stroke();
	lienzo.closePath();
}