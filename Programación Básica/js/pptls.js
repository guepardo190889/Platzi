//Juego de Piedra, Papel, Tijera, Lagarto, Spock
//Instrucciones: http://mundogeek.net/archivos/2009/02/20/piedra-papel-tijeras-lagarto-o-spock/

var DEFAULT = -1;
var PIEDRA = 0;
var PAPEL = 1;
var TIJERA = 2;
var LAGARTO = 3;
var SPOCK = 4;
var COMENZAR_JUEGO = 5;
var SALIR_JUEGO = 6;
var MOSTRAR_INSTRUCCIONES = 9;
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var mostrarInstrucciones = true;
var opcionJugador = -1;
var opcionMaquina = -1;
var contJugador = 0;
var contMaquina = 0;
var continuar = true;

menu();

function menu() {
	opcionJugador = prompt("Bienvenido al juego: Piedra, Papel, Tijera, Lagarto, Spock!\n5=Jugar\n6=Salir\n9=Instrucciones",5);
	validaOpcionMenu();
}

function imprimeInstrucciones() {
	alert("Piedra le gana a: Tijera y Lagarto\nPapel le gana a: Piedra y Spock\nTijera le gana a: Papel y Lagarto\nLagarto le gana a: Spock y Papel\nSpock le gana a: Tijera y Piedra");
	menu();
}

function jugar() {
	opcionJugador = prompt("0=Piedra\n1=Papel\n2=Tijera\n3=Lagarto\n4=Spock",0);
	opcionMaquina = aleatorio(0,4);

	validaOpcionJugador();

	if(opcionJugador == opcionMaquina) {
		imprimeGanador("EMPATE!")
	}
	else if((PIEDRA == opcionJugador && (opcionMaquina == LAGARTO || opcionMaquina == TIJERA))
		|| (PAPEL == opcionJugador && (opcionMaquina == PIEDRA || opcionMaquina == SPOCK))
		|| (TIJERA == opcionJugador &&( opcionMaquina == PAPEL || opcionMaquina == LAGARTO))
		|| (LAGARTO == opcionJugador && (opcionMaquina == PAPEL || opcionMaquina == SPOCK))
		|| (SPOCK == opcionJugador && (opcionMaquina == PIEDRA || opcionMaquina == TIJERA))) {
		imprimeGanador("GANASTE!")
		contJugador++;
	}
	else {
		imprimeGanador("PERDISTE!")
		contMaquina++;
	}

	validaContinuar();
}

function validaOpcionMenu() {
	if(COMENZAR_JUEGO == opcionJugador) {
		jugar();
	}
	else if(SALIR_JUEGO == opcionJugador) {
		imprimeSalida();
	}
	else if(MOSTRAR_INSTRUCCIONES == opcionJugador) {
		imprimeInstrucciones();
	}
	else {
		//alert("Elegiste una opción inválida");
		opcionJugador = DEFAULT;
		menu();
	}
}

function validaOpcionJugador() {
	if(PIEDRA != opcionJugador && PAPEL != opcionJugador && TIJERA != opcionJugador && LAGARTO != opcionJugador && SPOCK != opcionJugador) {
		alert("La opción que elegiste no es válida");
		jugar();
	}
}

function validaContinuar() {
	opcionJugador = prompt("Jugador: " + contJugador + "\nMáquina: " + contMaquina +"\n¿Quieres jugar otra vez? 5=SI, 6=NO, 9=Instrucciones",5);

	if(COMENZAR_JUEGO == opcionJugador) {
		opcionJugador = DEFAULT;
		opcionMaquina = DEFAULT;
		jugar();
	}
	else if(SALIR_JUEGO == opcionJugador) {
		imprimeSalida();
	}
	else if(MOSTRAR_INSTRUCCIONES == opcionJugador) {
		imprimeInstrucciones();
		opcionJugador = DEFAULT;
		opcionMaquina = DEFAULT;
	}
	else {
		alert("Elegiste una opción inválida");
		validaContinuar();
	}	
}

function imprimeSalida() {
	alert("Jugador: " + contJugador + "\nMáquina: " + contMaquina +"\nADIÓS!");
}

function imprimeGanador(resultado) {
	alert("Tú elejiste: " + opciones[opcionJugador] + "\nLa máguina eligió: " + opciones[opcionMaquina] + "\n" + resultado);
}

//Genera un número aleatorio entre un rango de enteros
function aleatorio(minimo,maximo) {
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

	return numero;
}

