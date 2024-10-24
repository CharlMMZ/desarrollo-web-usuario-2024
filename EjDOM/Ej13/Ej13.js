window.onload = function() {
    let parrafo = document.getElementsByTagName("p")[0];

    let estilos = window.getComputedStyle(parrafo);
    let color = estilos.getPropertyValue("color");
    imagen.style.setProperty("background-color", color);

    parrafo.onclick = function() {
        imagen.style.setProperty("background-color", null);
    }


}