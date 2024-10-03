/*
Ejercicio 9: Crea un script que pida al usuario un numero entero positivo N mayor a 2.
Hay que controlar que el numero introducido sea correcto. Si no es así se volverá a
pedir.
A continuación debe crearse una matriz NxN rellena con los resultados de la tabla de
multiplicar de N (empezando en 1). Finalmente, muestra por consola la matriz “en
forma de matriz”
Ej: Para el número 3, el programa debe mostrar
03 06 09
12 15 18
21 24 27
*/
/*
function ej9() {
    
var user;
var matriz = [];
var contador = 0;
do {
    user = parseInt(prompt("Escribe un número positivo mayor a 2",""));
} while (user==isNaN);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {

        console.log = matriz[i][j];
        
    }
}



}
console.log(ej9);
*/
function eje() {
    var matrix = [
        [3,6,9],
        [12,15,18],
        [21,24,27]
    ];
    

    for (let i = 0; i < matrix.length; i++) {
        let arr=[];
        matrix.forEach(ele => {
            arr.push(ele[i]);
        });
    console.log(arr);
    }
    
}


