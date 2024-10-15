function ejercicio1(){
    let euro;
    let dollarValue = 1.0965;
    do {
        euro=parseInt(prompt("Dame un número en euros para pasarlo a dólar",""));
        
        if (isNaN(euro)) {
            alert("¡¡Introduce un número de euros!!");
        }
        if (euro<0) {
            alert("¡¡Introduce un número positivo de euros!!");
        }
    } while (euro < 0 || isNaN(euro));
    let operacion = euro*dollarValue;
    alert(euro+" euros equivalen a "+operacion+" dólares americanos.");
}