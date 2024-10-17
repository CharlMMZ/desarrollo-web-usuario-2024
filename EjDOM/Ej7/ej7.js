window.onload = function(){
    let dedo = document.querySelectorAll("td");
    let colores = ["white",'green','red','blue','black'];
        for (const element of dedo) {
            element.onclick = function() {
                if (element.style.backgroundColor === colores[0]) {
                    element.style.backgroundColor = colores[1];
                }else if(element.style.backgroundColor === colores[1]){
                    element.style.backgroundColor = colores[2];  
                }else if(element.style.backgroundColor === colores[2]){
                    element.style.backgroundColor = colores[3];  
                }else if(element.style.backgroundColor === colores[3]){
                    element.style.backgroundColor = colores[4];  
                }else{
                    element.style.backgroundColor = colores[0];
                }
            } 
        }
    }