/**
 * Crear mapa con repeticiones de matriz
− Crear una función que reciba una matriz de palabras.
− La función devolverá un mapa que contiene cada palabra como clave y el valor es el número
de veces que esa palabra aparece en la matriz.
− Haremos una página web que lea palabras hasta que el usuario cancele o deje la casilla vacía
y mostraremos el número de repeticiones de las palabras
 */
window.addEventListener("load", inicio, true);
function inicio(){
    let array = [];
    let i = 0
    let str = window.prompt("Introduce una palabra:");
    // Todas las palabras se consideraran escritas en minúscula.
    str = str.toLowerCase();
    while(!(str == null || str == "")){
     array[i]= str;
        str = window.prompt("Introduce otra palabra:");
        str = str.toLowerCase();
        i++;
    }
    arrayMap(array);



}

function arrayMap(palabras){

    palabras.sort((a, b)=> a.localeCompare(b));
    console.log(palabras);
    let mapa = new Map();
    let num = 1;
    
    for(let i = 0; i< palabras.length; i++){
//Hay que tener en cuenta que la palabras que
//encuentre primero con el mismo número de palabras que vienen despues seran machacadas
// hay formas de solucionarlo pero no seria esactamente lo que pide el ejercicio. 
        if(palabras[i+1] == palabras[i]){
            num++;
        }else{
            mapa.set(num, palabras[i]);
            num = 1;
      
        }
    }

    console.log(mapa)
    for (const [num , palabra] of mapa) {

        document.write("<p>Hay "+num+" repeticiones de la palabra: " +palabra+".</p>");
    }
}