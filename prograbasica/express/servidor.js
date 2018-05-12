//Documentación:
//Instalar expres: http://expressjs.com/es/starter/static-files.html
//Agregar archivos en carpetas: https://www.npmjs.com/package/express

var express = require("express");

var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/culebrita", culebrita);
aplicacion.get("/cajero", cajero);
aplicacion.get("/canvas", canvas);
aplicacion.get("/fizzbuzz", fizzbuzz);
aplicacion.get("/pakiman", pakiman);
aplicacion.get("/teclas", teclas);
aplicacion.get("/villaplatzi", villaplatzi);
aplicacion.get("/pizarra", pizarra);

aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/culebrita/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/cajero/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/canvas/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/fizzbuzz/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/pakiman/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/teclas/"));
aplicacion.use(express.static("/Development/workspaces/cursos/Platzi/prograbasica/villaplatzi/"));

function inicio(request, response) {
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/express/index.html");
}

function culebrita(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/culebrita/culebrita.html");
}

function cajero(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/cajero/atm.html");
}

function canvas(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/canvas/canvas.html");
}

function fizzbuzz(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/fizzbuzz/modulo.html");
}

function pakiman(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/pakiman/pakiman.html");
}

function teclas(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/teclas/flechas.html");
}

function villaplatzi(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/villaplatzi/villa.html");
}

function pizarra(request, response){
  response.sendFile("/Development/workspaces/cursos/Platzi/prograbasica/teclas/pizarra.html");
}

aplicacion.listen(8989);
