let canvas = document.getElementById("areaJuego");
let cxt = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 130;
const ANCHO_GATO = 150;
const ALTO_COMIDA = 60;
const ANCHO_COMIDA = 60;

function graficarGato() {
    cxt.fillStyle = "#dda02f";
    cxt.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

function graficarComida() {
    cxt.fillStyle = "#2c9937";
    cxt.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

function iniciarJuego() {
    gatoX = (canvas.width - ANCHO_GATO)/2;
    gatoY = (canvas.height - ALTO_GATO)/2;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    graficarGato();
    graficarComida();
}