
function countBy(X, Y) {
    let res = [];
    if (X >= 0 || Y >= 0) {
        //Con los Y primeros multiplos de X empezando por 1
        for (let i = 1; i <= Y; i++) {
            if(i==1){
                res[i]=1;
            }else{
                res[i]=(X * i); 
            }
            
        }
    }
    return res;
}
function eje(){
    console.log(countBy(10,5));
}
