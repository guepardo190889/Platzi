//Arrays, pueden ser de 2 tipos:
//El Vector(Array) tiene una dimensión
//La matriz tiene dos dimensiones
//Las "coordenadas" en una matriz son: primero las columnas de arriba a abajo y luego las filas de izquierda a derecha

//var menu = ["Productos", "Ventas", "Contacto"];
//document.write(menu[2]);

//var foda = [ ["Fuerza", "Oportunidad"] , ["Debilidades", "Amenazas"] ];
//document.write(foda[1][1]);

//1= bomba 0=No hay bomba
var campo = [[1,0,0],
			 [0,1,0],
			 [1,1,1]];

var x,y, posicion;
var textos = ["Césped", "Mina"];

alert("Estás en un campo minado!\n" +
	"Elige una posición entre 0 y 2 para X y Y");

x = prompt("Posición en X (entre 0 y 2): ");
y = prompt("Posición en Y (entre 0 y 2): ");
posicion = campo[x][y];

document.write(textos[posicion]);

function validaCoordenada() {

	if(campo[0][0] == 1) {
		perder();
	}
	else {
		ganar();
	}
}

function perder() {
	alert("BOOOOOOOM!!!");
	document.write("<h1>Elegiste un área minada :( </h1>");
}

function ganar() {
	alert("FELICIDADES!!!");
	document.write("<h1>Eres un ganador :)</h1>");
}