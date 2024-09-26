function devolverUnicos(array1,array2){
    let arrayUnico = [];
    //Para el primer array
    for (let i = 0; i < array1.length; i++) {
        let contador1 = 0;
        let contador2 = 0;
        let celda1 = array1[i];

        for (let j = 0; j < array1.length; j++) {
            if (array1[i]===celda1) {
                contador1++;
            }
            
        }

        for (let l = 0; l < array2.length; l++) {
            if (array2[l]===celda1) {
                contador2++;
            }
        }

        if (contador1 === 1 && contador2 === 0) {
            arrayUnico[i]=celda1;
        }
    }
    //El segundo array va después
    for (let i = 0; i < array2.length; i++) {
        let contador1 = 0;
        let contador2 = 0;
        let celda2 = array2[i];

        for (let j = 0; j < array1.length; j++) {
            if (array1[i]===celda2) {
                contador1++;
            }
            
        }

        for (let l = 0; l < array2.length; l++) {
            if (array2[l]===celda2) {
                contador2++;
            }
        }

        if (contador1 === 0 && contador2 === 1) {
            arrayUnico[i]=celda2;
        }
    }

    return arrayUnico;

    
}
function eje(){
    console.log(devolverUnicos([1,2,3,4,5],[2,5,4,5,8]));
}
