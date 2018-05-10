var VELOCIDAD_INICIAL = 1000;

var TAMANIO_INICIAL_CULEBRITA = 3;
//Usar números pares, porque si se usa impar, la culebra no puede dar vueltas bien, se mata ella sola. El número se refiere
//al tamaño de uno de los lados del tablero, por ejemplo: 4 casillas significa que el tablero mide 4x4=16 casillas
var CASILLAS_POR_NIVEL = 4;

//Esto es por si quieres que al llegar a un nivel específico aparezca un mensaje especial al jugador
var CASO_ESPECIAL_HABILITADO = true;
var NIVEL_MINIMO_CASO_ESPECIAL = 3;
var MENSAJE_CASO_ESPECIAL = "¿quieres ser mi novia?";

//Si quieres avanzar el nivel aunque no lo hayas terminado ponlo en 'false'
var PUEDO_SALTAR_NIVELES = false;
