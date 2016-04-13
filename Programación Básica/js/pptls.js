//Juego de Piedra, Papel, Tijera, Lagarto, Spock
//Instrucciones: http://mundogeek.net/archivos/2009/02/20/piedra-papel-tijeras-lagarto-o-spock/

var PIEDRA = 0;
var PAPEL = 1;
var TIJERA = 2;
var LAGARTO = 3;
var SPOCK = 4;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var mostrarInstrucciones = true;
var opcionJugador = 0;

function jugar() {
	if(mostrarInstrucciones) {
		alert("Piedra le gana a: Tijera y Lagarto\nPapel le gana a: Piedra y Spock)\nTijera le gana a: Papel y Lagarto)\nLagarto le gana a: Spock y Papel\nSpock le gana a: Tijera y Piedra\Mostrar instrucciones otra vez: 9");
		mostrarInstrucciones = false;
	}

	opcionJugador = prompt("0=Piedra\n1=Papel\n2=Tijera\n3=Lagarto\n4=Spock");

	if()
}

//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo,maximo) {
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

	return numero;
}

