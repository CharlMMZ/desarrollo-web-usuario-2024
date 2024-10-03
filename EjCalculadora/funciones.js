


function recogerNumero(texto) {
    
    let cliente;
    do {
        cliente = parseInt(prompt(texto,""));
        
    } while (isNaN(cliente));
    return cliente;
}

function sumar(num1,num2) {
    let res = num1+num2;
    return res;
}
function restar(num1,num2) {
    let res = num1-num2;
    return res;
}
function multiplicar(num1,num2) {
    let res = num1*num2;
    return res;
}
function dividir(num1,num2) {
    let res = num1/num2;
    return res;
}

function recogeOperación() {
    let pregunta;
    
    do {
        pregunta = parseInt(prompt("¿Quieres sumar(1), restar(2), multiplicar(3) o dividir(4)?",""));

    } while (isNaN(pregunta)||pregunta>4||pregunta<1);

    return pregunta;


}

function principal() {
    let num1;
    let num2;

    do {
        num1 = recogerNumero("Dame un número");
        
    } while (isNaN(num1));

    do {
        num2 = recogerNumero("Dame un segundo número:");
        
    } while (isNaN(num2));

    let res;
    switch (recogeOperación()) {
        case 1:
            res = sumar(num1,num2);
            break;
    
        case 2:
            res = restar(num1,num2);
            break;

        case 3:
            res = multiplicar(num1,num2);
            break;

        case 4:
            res = dividir(num1,num2);
            break;
    
    }

    alert("El resultado de la operación es: "+res);
}