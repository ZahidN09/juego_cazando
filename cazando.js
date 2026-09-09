let canvas = document.getElementById("areaJuego");
let cxt = canvas.getContext("2d");

function graficarGato(){
    cxt.fillStyle ="#dda02f" ;
    cxt.fillRect(canvas.width/2-70,canvas.height/2-60,140,120);
}

function graficarComida(){
    cxt.fillStyle ="#2c9937" ;
    cxt.fillRect(0,0,80,80);
}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}