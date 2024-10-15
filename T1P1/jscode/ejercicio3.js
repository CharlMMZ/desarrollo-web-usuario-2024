function ejercicio3(){
    //a
    let num;
    let array = [];
    let contador = 0;
    do {
        num=parseInt(prompt("Dame números positivos (para salir negativo)",""));
        if (isNaN(num)) {
            alert("¡¡Introduce un número!!");
        }
        if (num<0) {//no hace falta
            alert("Acabas de salir con un número negativo");
        }
        if (num > 0 && !isNaN(num)) {//si el número es positivo lo añadimos al array
            array[contador]=num;
            contador++;
        }
    } while (num > 0 || isNaN(num));
    //b
    let mostrar = "";
    for (let i = 0; i < array.length; i++) {
      mostrar +=array[i]+" ";
      
    }
    console.log(mostrar);
    //c
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma=suma+array[i];
        
    }
    console.log(suma);
    //d
    let pos;
    do {
        pos=parseInt(prompt("Dame un número positivo",""));
        if (pos<0) {
            alert("¡¡Introduce un número positivo!!");
        }
        if (isNaN(pos)) {
            alert("¡¡Introduce un número!!");
        }
    } while (pos < 0 || isNaN(pos));
    
    //e
    
    let primera;
    let ultima;
    let i;
    let aparece = 0; //0 no aparece y 1 si aparece
    for (i = 0; i < array.length; i++) {
        if (array[i] == pos && aparece == 0) {
            primera = i;
            aparece = 1;
            
        }
        if (array[i] == pos) {
            ultima = i;
        }
        
    }
    if (aparece == 1) {
        console.log("Primera aparición: "+primera);//empiezan en 0
        console.log("Última aparición: "+ultima);
    }else{
        console.log("El número no aparece en el array.");
    }
}
