var PUERTO_LED = 13;
var PUERTO_SERVO = 9;
var CONFIG_CELDA = {pin:"A0", freq:50};
var MILISEGUNDOS_CICLO = 1000;
var MINIMO_LUZ = 800;

var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);

var led, servo, celda;
var turno = 0;

function prender() {
  led = new jf.Led(PUERTO_LED);
  led.on();

  servo = new jf.Servo(PUERTO_SERVO);
  servo.to(0); //0,90,180 son grados

  celda = new jf.Sensor(CONFIG_CELDA);

  ondear();
}

function ondear() {
  console.log("Luz: " + celda.value);

  var luz = celda.value;

  if(luz > MINIMO_LUZ) {
    if(turno == 1) {
      turno  = 0;
      servo.to(70);
    }
    else {
      turno = 1;
      servo.to(110); 
    }
  }
  else {
    servo.to(150);
  }

  setTimeout(MILISEGUNDOS_CICLO);
}
