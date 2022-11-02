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

function filtro() {

    const miArray = [3, 16, 23, 65, 35, 18, 19, 15, 7];
    var resultado_1 = [];
    var contador = 0;


    miArray.forEach(element => {
        //Filtra los número multiplos de 2, o elegir otro número
        if (element % 2 == 0) {
            resultado_1[contador] = element;
            contador++;
            return true
        } else {
            return false;
        }
    });

    miArray.forEach(element => {
        //Filtra los número NO multiplos de 2, o elegir otro número
        if (element % 2 != 0) {
            resultado_2[contador] = element;
            contador++;
            return true
        } else {
            return false;
        }
    });
    document.write("<p>Filtro de los número multiplos de 2: </p>");
    console.log(resultado_1);
    document.write("<p>Filtro de los NO número multiplos de 2: </p>");
    console.log(resultado_2);
}

filtro();