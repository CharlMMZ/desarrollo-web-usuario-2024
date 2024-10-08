
let matrix=[
    ["amor"],
    ["ramo"]
];

function repetido(matrix) {
    let acumulados=[];
    matrix.forEach(fila => {
        fila.forEach(num => {
            if (acumulados.include(num)) {
                return true;
            }
            acumulados.push(num);
        });
    });
    return false;
}
/*
function repetido(matrix) {
    let acumulados=[];
    for(fila of matrix){
        for(num of fila) {
            if (acumulados.include(num)) {
                return true;
            }
            acumulados.push(num);
        });
    });
    return false;
}
*/

function anagrama(cad1,cad2) {
    let arraycad1=cad1.split('');
    let arraycad2=cad2.split('');

    let orden1=arraycad1.sort;
    let orden2=arraycad2.sort;

    let unir1=orden1.join("");
    let unir2=orden2.join("");
    if (unir1===unir2) {
        return true;
    }
    return false;
}