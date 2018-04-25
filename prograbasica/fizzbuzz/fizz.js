var numeros = 100;

fizzbuzz();

function fizzbuzz()  {
  for(var i = 1; i <= numeros; i++) {
    var isFizz = validaFizz(i);
    var isBuzz = validaBuzz(i);

    if(isFizz) {
      document.write("fizz");
    }

    if(isBuzz) {
      document.write("buzz");
    }

    if(!isFizz && !isBuzz) {
      document.write(i);
    }

    document.write("<br />")
  }
}

function validaFizz(numero) {
  return numero % 3 == 0;
}

function validaBuzz(numero) {
  return numero % 5 == 0;
}
