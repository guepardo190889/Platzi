int AMARILLO = 13;
int ROJO = 7;
int MILISEGUNDOS = 300;

void setup() {
  pinMode(AMARILLO, OUTPUT);
  pinMode(ROJO, OUTPUT);
}

void loop() {
  digitalWrite(AMARILLO, HIGH);
  digitalWrite(ROJO, LOW);
  delay(MILISEGUNDOS);
  digitalWrite(AMARILLO, LOW);
  digitalWrite(ROJO, HIGH);
  delay(MILISEGUNDOS * 2);
}

