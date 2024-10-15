function manu() {
    let parras = document.getElementsByTagName("p");//devuelve array
    let dedo = document.getElementsByTagName("p")[0];//Referencia al primer p
    console.log(parras);
    console.log(dedo.id);//poniendo una etiqueta y su atributo podemos tener su referencia

    dedo.id = "Iker";//podemos cambiar el id pero es una burrada

    //puedo transformar cualquier etiqueta así
    dedo.width = "100px";


    //foma correcta de cambiar
    dedo.setAttribute('width', 2000);//al no poner las unidades se ha respetado(no como css)
    dedo.setAttribute('class', "goku");
    dedo.setAttribute('name', "carlos");
    let valor = parseInt(dedo.getAttribute("width"));
    valor -= 300;
    dedo.setAttribute('width', valor);
    console.log();
}

window.onload = function(){

    
}

function cambia() {
    let dedin = document.getElementsByTagName("input")[0];

    dedin.type = "password";
}

function xanxe() {
    let bombi = document.getElementById("bombom");

    //atributo innerHTML devuelve todo el contenido de sus etiquetas (peligrosa)
    console.log(bombi.innerHTML);
    bombi.innerHTML = "<b>ACABO DE CARGARME EL ARBOL DOM</b>";
}