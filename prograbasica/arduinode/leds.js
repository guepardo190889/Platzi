const PUERTO_LED_AMARILLO = 9;
const PUERTO_LED_ROJO = 13
const MILISEGUNDOS_LED_AMARILLO = 200;
const MILISEGUNDOS_LED_ROJO = 700;

var jf = require("johnny-five");

var circuito = new jf.Board();
circuito.on("ready", prender);

function prender() {
  var ledAmarillo = new js.Led(PUERTO_LED_AMARILLO);
  var ledRojo = new js.Led(PUERTO_LED_ROJO);

  ledAmarillo.blink(MILISEGUNDOS_LED_AMARILLO);
  ledRojo.blink(MILISEGUNDOS_LED_ROJO);
}
