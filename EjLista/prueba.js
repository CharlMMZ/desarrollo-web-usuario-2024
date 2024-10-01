let lista =[1,2,3,4,5];
let otra = ['uno','dos','tres,veinte'];
console.log(lista);

let res = lista.concat(6,7,8,9);
res = lista.concat(otra);
//meter
//res.push("flipao");//añade al final
//res.unshift("Por delante");//añade por delante
//sacar
//let ultimo = res.pop();//me devuelve el último elemento, sacandolo del array
//ultimo = res.shift();//me devuelve el primer elemento, sacandolo del array

//res.reverse();//altera el array y le da la vuelta

/*
let anonima = res.some(function(edad){
    return edad==8;
});
let anonimaevery = res.every(function(edad){
    return edad==8;
});

console.log(anonima);
console.log(anonimaevery);
*/


//foreach
lista.forEach(function(ele){
    //console.log (ele*2);
    if (ele%2==0) {
        console.log(ele+" es par");
    }else{
        console.log(ele+" es impar");
    }
});

//map
let otro=res.map((ele)=>{
    if (ele%2==0){
        return ele;
    }else{
        return ele*2;
    }
    
});




/*
Esto no se puede hacer así, antes hacíamos un constructor de copia
let nueva = lista;
nueva[0]=67;
*/
//spread operator (para acelerar el trabajo)
let nueva = [...lista];
nueva[0]=67;
//también sirve como sustituto de concat, de hecho es hasta mejor
let conqui = [...lista,...nueva,];


//Asignar a variables
let a,b,c;
let listilla = [23,34,65];

[a,b,c] = listilla;
//[a,b,c] = [23,34,65];
//como vemos no modificamos los valores de listilla
console.log(listilla);
console.log(a);
console.log(b);
console.log(c);

//si quiero intercambiar pos 1 con pos 2 (empieza en 0)

[listilla[1],listilla[2]]=[listilla[2],listilla[1]];
console.log(listilla);


/*
function paco(){
    return [7,11];
}

let posx, posy;
[posx,posy]= paco;

*/






let salida = res.join("-");//coge un array y lo une con lo que sea, devolviendo una cadena
console.log(salida);
console.log(res);
