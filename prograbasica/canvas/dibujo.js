//Autor: Seth Luis

var SUPERIOR_IZQUIERDA = 1;
var SUPERIOR_DERECHA = 2;
var INFERIOR_IZQUIERDA = 3;
var INFERIOR_DERECHA = 4;

var t_posicion = document.getElementById("it_posicion");
var t_lineas = document.getElementById("it_lineas");
var b_enviar = document.getElementById("ib_enviar");
b_enviar.addEventListener("click", click_dibujar);
var b_limpiar = document.getElementById("ib_limpiar");
b_limpiar.addEventListener("click", click_limpiar);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var alto = d.height;

var posicion, numLineas, intervalo, valido;

dibujaRectangulo();

function click_dibujar() {
	posicion = parseInt(t_posicion.value);
	numLineas = parseInt(t_lineas.value);
	intervalo = parseInt(ancho / numLineas);

	algoritmo();
}

function click_limpiar() {
	lienzo.clearRect(0,0,ancho,alto);
	dibujaRectangulo();
}

function algoritmo() {
	var xInicial ,yInicial, xFinal, yFinal;

	validar();

	if(valido == 1) {
		if(SUPERIOR_IZQUIERDA == posicion) {
			yInicial = alto
			xFinal = 0;
			for(i = 0; i < numLineas; i++) {
				yInicial = yInicial - intervalo;
				xFinal = xFinal + intervalo;
				dibujaLinea("red", 0, yInicial, xFinal, 0);
			}
		}
		else if(SUPERIOR_DERECHA == posicion) {
			yInicial = alto;
			xFinal = ancho;
			for(i = 0; i < numLineas; i++) {
				yInicial = yInicial - intervalo;
				xFinal = xFinal - intervalo;
				dibujaLinea("red", ancho, yInicial, xFinal, 0);
			}
		}
		else if(INFERIOR_IZQUIERDA == posicion) {
			yInicial = 0;
			xFinal = 0;
			for(i = 0; i < numLineas; i++) {
				yInicial = yInicial + intervalo;
				xFinal = xFinal + intervalo;
				dibujaLinea("red", 0, yInicial, xFinal, alto);
			}
		}
		else if(INFERIOR_DERECHA == posicion) {
			yInicial = 0;
			xFinal = ancho
			for(i = 0; i < numLineas; i++) {
				yInicial = yInicial + intervalo;
				xFinal = xFinal - intervalo;
				dibujaLinea("red", ancho, yInicial, xFinal, alto);
			}
		}
	}
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

function dibujaRectangulo() {
	dibujaLinea("black", 1, 1, ancho - 1, 1);
	dibujaLinea("black", ancho - 1, 1, ancho - 1, alto - 1);
	dibujaLinea("black", ancho - 1, alto - 1, 1, alto - 1);
	dibujaLinea("black", 1, alto - 1, 1, 1);
}

function validar() {
	valido = 1;

	if(valido == 1 && isNaN(posicion)) {
		valido = 0;
		alert("La posición sólo admite números, no letras");
	}

	if(valido == 1 && (SUPERIOR_DERECHA != posicion &&
		SUPERIOR_IZQUIERDA != posicion &&
		INFERIOR_IZQUIERDA != posicion &&
		INFERIOR_DERECHA != posicion)) {
		valido = 0;
		alert("La posición debe ser de 1 a 4");
	}

	if(valido == 1 && isNaN(numLineas)) {
		valido = 0;
		alert("La cantidad de líneas sólo admite números, no letras");
	}

	if(valido == 1 && numLineas > ancho) {
		valido = 0;
		alert("El número máximo de líneas es de " + ancho);
	}
}
