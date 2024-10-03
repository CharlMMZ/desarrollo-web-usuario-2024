function fizzBuzz() {
    
    let cliente;
    do {
        cliente = parseInt(prompt("Dame el tamaño de una matriz NxN:",""));
        
    } while (isNaN(cliente));
    let matriz = []
    
    for (let i = 0; i < cliente; i++) { 
        matriz[i]=[];

        for (let j = 0; j < cliente; j++) {
            matriz[i][j] = Math.floor(Math.random() * (cliente * 2 ) + cliente);
            
        }
        
    }
    //Número mayor de la matriz y mostrarlo
    let mayor = 0;
    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j]>mayor) {
                mayor=matriz[i][j];
            }
            
        }
        
    }
    console.log(mayor);

    //Mostrar la matriz en filas y columas
    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {
                console.log(matriz[i][j]+" ");
            
        }
        if (i=cliente) {
            console.log("\n");
        }
        
    }
}