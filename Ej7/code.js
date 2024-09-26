


function recibe(array){
	let listares = [];
    let sumar = 0;

    for (let i = 0; i < array.length; i++) {
        sumar += array[i];
        listares[i]=sumar;
        
    }

    return listares;
}
function eje(){
    console.log(recibe([1,3,5,6,88]));
}
    