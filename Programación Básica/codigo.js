
//El //alert : Función
//() : Parámetros de la función
//"" : Cadenas de texto

//alert("Hola mamá, ya sé programar!!!");
//alert(2525);
//alert(5*4);
//alert("10" + 1);

//var nombre = "Seth Karim";
//var apellidos = "Luis Martínez";
//var edad = 27;

//alert(nombre);
//alert(nombre + apellidos)
//alert(nombre + " " + apellidos);
//alert(nombre + " " + apellidos + "\n" + edad + " años.");
//el navegador siempre le da prioridad a las cadenas sobre los números

//alert(5 + 8 + "2"); //132 --> (5+2) + "2"
//alert("2" + 5 + 8);
//alert("2" +  5 * 8); // la multiplicación tiene prioridad sobre la suma (precedencia de operadores)


var peso;
var pesoEnMarte; //camelCase

alert("¿Quieres saber tu peso en Marte?");

peso = prompt("¿Cuál es tu peso?","70");
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

//peso = Number(peso);
//parseInt para convertir cadena a número
alert(pesoEnMarte); 


