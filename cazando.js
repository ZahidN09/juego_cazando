let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const ALTO_GATO = 130;
const ANCHO_GATO = 150;
const ALTO_COMIDA = 60;
const ANCHO_COMIDA = 60;

let puntaje = 0;
let tiempo = 10;
let intervalo;

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "#e0a537");
    detertarColision();
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "#2c9937");
}

function iniciarJuego() {
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    actualizarPantalla();
    intervalo = setInterval(restarTiempo,1000);
}

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function limpiarCanva() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    actualizarPantalla();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    actualizarPantalla();
}

function moverArriba() {
    gatoY = gatoY - 10;
    actualizarPantalla();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    actualizarPantalla();
}

function actualizarPantalla() {
    limpiarCanva();
    graficarComida();
    graficarGato();
}

function detertarColision() {
    if (verificarColision()) {
        //alert("ATRAPADO");
        cambiarPosicionComida();
        aumentarPuntaje();
    }
}

function cambiarPosicionComida() {
    comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, canvas.height - ANCHO_COMIDA);
    if (verificarColision()) { //Para que no reaparezca dentro del gato
        cambiarPosicionComida();
    }
    actualizarPantalla();
}

function verificarColision() {
    return gatoX + ANCHO_GATO > comidaX 
        && gatoX < comidaX + ANCHO_COMIDA 
        && gatoY + ALTO_GATO > comidaY 
        && gatoY < comidaY + ALTO_COMIDA;
}

function aumentarPuntaje(){
    puntaje = puntaje + 1;
    mostarEnSpan("puntos",puntaje);
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostarEnSpan("tiempo",tiempo);
}