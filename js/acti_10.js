/**
 * ACTIVIDAD 10 – Crear la función "Filtro"
− El método de filtro de las matrices visto en este tema, permite indicar una función de devolución de llamada, para
aplicar un filtro a los elementos de una matriz.
− Es una buena práctica aprender a implementar funciones de devolución de llamada para intentar crear las nuestras.
funciones
− Crea una función llamada filtro que recibe una matriz y una función de devolución de llamada. la devolución de llamada
se entenderá que la función tiene un único parámetro y que devuelve verdadero o falso
dependiendo del criterio que establezcamos.
− Nuestra función de filtro devolverá una nueva matriz con los elementos que cumplen los criterios
establecido en la función de devolución de llamada.
− Pruébelo con varias matrices y funciones de filtro que configure para medir.
 */

//window.addEventListener("load", inicio, true);
const numeros = [3, 16, 23, 65, 35, 18, 19, 15, 7];
const nombres = ["Sandra", "David", "Toni", "Gemma"]

console.log(filtro(numeros,x => x % 2 === 0)) ;
console.log(filtro(numeros, x => x % 3 === 0 )) ;
console.log(filtro(nombres, x => x == "David")) ;
console.log(filtro(nombres, x => x == "Toni")) ;
console.log(filtro(nombres, x => x != "Toni")) ;

document.write("<p> divisores del dos: "+filtro(numeros,x => x % 2 === 0)+".</p>") ;
document.write("<p> divisores del tres: "+filtro(numeros, x => x % 3 === 0 )+".</p>") ;
document.write("<p> Mi nombre es "+filtro(nombres, x => x == "David") + ".</p>") ;
document.write("<p> La profesora de js es  "+filtro(nombres, x => x == "Gemma")+".</p>") ;
document.write("<p> Todos menos Sandra: "+filtro(nombres, x => x != "Sandra")+".</p>") ;
document.write("<p> Todos: "+filtro(nombres, x => x )+".</p>") ;
function filtro(miArray, callback){
 filtrado = [];

    contador = 0;
    for(var i = 0; i < miArray.length; i++){

        if(callback(miArray[i])){
            filtrado[contador] = miArray[i];
            contador++;
        }

      


}
return filtrado;

}


