function ejercicio2(){
    let suspensos = 0;
    let aprobados = 0;
    let notables = 0;
    let sobresalientes = 0;
    let nota;
    for (let i = 0; i < 10; i++) {
        do {
            
            nota=parseInt(prompt("Dame una calificación",""));
            
            if (isNaN(nota)) {
                alert("¡¡Introduce un número como nota!!");
            }
            if (nota < 0 || nota > 10) {
                alert("¡¡Introduce una nota entre 0 y 10!!");
            }
        } while (nota < 0 || nota > 10 || isNaN(nota));
        if (nota < 5) {
            suspensos++;
        }
        if (nota >= 5 && nota < 7) {
            aprobados++;
        }
        if (nota >= 7 && nota < 9) {
            notables++;
        }
        if (nota >= 9) {
            sobresalientes++;
        }
    }
    alert("Supensos: "+suspensos+"\n"+
        "Aprobados: "+aprobados+"\n"+
        "Notables: "+notables+"\n"+
        "Sobresalientes: "+sobresalientes+"\n"
    );
}