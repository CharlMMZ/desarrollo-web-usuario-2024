function ejercicio4() {
    //a
    let fila1 = [];
    let fila2 = [];
    let fila3 = [];
    let contador = 0;
    for (let i = 0; i < 9; i++) {
        if (i<3) {
            fila1[contador]=Math.floor(Math.random() * (20)+2);
            contador++;
        }
        if (i<6 && i>2) {
            fila2[contador]=Math.floor(Math.random() * (20)+2);
            contador++;
        }

        if (i>5) {
            fila3[contador]=Math.floor(Math.random() * (20)+2);
            contador++;
        }

        if (contador==2) {
            contador=0;
        }
    }
    //b

    //c
    //let suma;

    console.log(suma);


}