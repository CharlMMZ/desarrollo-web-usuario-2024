/*
function izquierda() {
    let imagen = document.getElementsByTagName("img")[0];

    let posicion = document.getComputerStyle(imagen).getPropertyValue("left");
    if (posicion>=5) {
        let res=parseInt(posicion);
        res = (posicion-5)+"px";
        //document.body.style.setProperty("left", res);
        imagen.style.left=res;
    }
}


function derecha() {
    let imagen = document.getElementsByTagName("img")[0];

    let posicion = parseInt(document.getComputerStyle(imagen).getPropertyValue("right"));
    
    if (posicion>=5) {
        let res = posicion+5;
        document.body.style.setProperty("left", res);
    }
}
*/
window.onload = function() {
    let bottones = document.getElementsByTagName("button");
    for (let botton of bottones) {
        mover(this);
        
    }
}

function mover(boton) {
    let imagen = document.getElementsByTagName("img")[0];
    let estilos = window.getComputedStyle(imagen);
    let posicion = estilos.getPropertyValue("left");

    if (boton.textContent == "Izquierda") {
        imagen.style.setProperty("left", posicion-5+"px");
    }else{
        imagen.style.setProperty("right", posicion+5+"px");
    }
}