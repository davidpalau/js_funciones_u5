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

    const miArray = [3, 16, 23, 65, 35, 19, 15, 7];

    let resultado = miArray.filter(valor => valor % 2 == 0);
    let resultado_1 = miArray.filter(valor => valor % 3 == 0);
    let resultado_2 = miArray.filter(valor => valor < 21 == 0);
    let resultado_3 = miArray.filter(valor => valor > 21 == 0);

    console.log(resultado);
    console.log(resultado_1);
    console.log(resultado_2);
    console.log(resultado_3);



    const otroArray = [
        {
            nombre: "David",
            edad: 47
        },
        {
            nombre: "Tony",
            edad: 21
        }]

    let resultado_4 = otroArray.filter((persona) => (persona.nombre == "David"));
    let resultado_5 = otroArray.filter((persona) => (persona.edad > 19));
    console.log(resultado_4);
    console.log(resultado_5);
}

filtro();