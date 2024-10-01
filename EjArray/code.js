let brutos =[100,1300,1500,1700,2000,2200,2800,3000];
let netos =[];
let rete = 0;
let fiscalAlto = [];
/*
a) Mostrar por consola todos los sueldos uno debajo del otro.
b)Aplicar el 15% de retencion a cada sueldo y devolver otro 
array (netos) con los nuevos valores.
c) Crear el array 'fiscalAlto' y guardar en el todos los sueldos mayores a 1935.
*/
for (let i = 0; i < brutos.length; i++) {
    console.log(brutos[i]+"\n");
    rete = brutos[i]-((brutos[i]*15)/100);
    netos[i] = rete;
    if (brutos[i]>1935) {
        fiscalAlto = brutos[i];
    }
}
/* 
brutos foreach (function(ele){
    console.log(ele;)
});
*/
/* 
let netos = netos.map(function(ele){
    return ele-((ele*15)/100);
}
*/
/* 
let netos = netos.map((ele)=>(ele-((ele*15)/100));
*/
/*
Filter debe devolver algo y el array resultante tendrá como mucho el mismo tamaño (es un filtro)

let fiscalAlto = brutos.filter(function(ele){
    return ele > 1935;
});

Los dos ultimos apartados nos lo podemos incluso encontrar así:
let fiscalAlto = brutos.map((ele)=>(ele-((ele*15)/100)).filter(ele => ele > 1935);



Estas funciones se les dice funciones de callback. 
Estas tienen entre 0 y 3 argumentos aunque 0 es casi imposible un caso.

Si ponemos como tercer parámetro el array con el que queremos trabajar:
brutos.map(function(ele, pos, array)){
    
}

for(let adri of brutos){
}
*/
/*Otros dos que no hemos utilizado son reduce y find*/
