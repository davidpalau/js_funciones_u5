/**
 * 
 * ACTIVITY 7 – Function to detect palindromes 
- Create a function to solve what was requested in practice 7 of UNIT 4. 
- The function receives a text and will return true if it is a palindrome and false if it is not. 
- Keep in mind that in order for palindromes to be considered well, punctuation marks 
(spaces, questions, commas, periods, etc.) are also ignored, tildes and umlauts are also 
ignored (the character a  is considered the same as the character  á) and is not distinguished 
between uppercase and lowercase letters.
ACTIVIDAD 7 – Función para detectar palíndromos
- Crear una función para resolver lo solicitado en la práctica 7 de la UNIDAD 4.
- La función recibe un texto y devolverá verdadero si es un palíndromo y falso si no lo es.
- Tenga en cuenta que para que los palíndromos se consideren bien, los signos de puntuación
(espacios, preguntas, comas, puntos, etc.) también se ignoran, las tildes y las diéresis también se ignoran.
ignorado (el carácter a se considera igual que el carácter á) y no se distingue
entre mayúsculas y minúsculas.
 */

window.addEventListener("load", inicio, true);

function inicio() {

    let str_1 = window.prompt("Introduce un palindromo: ");

    str_1 = str_1.toLocaleLowerCase();
    console.log(str_1);
    let str_2 = "";
    let str_3 = "";
    let letras = "abcdefghijklmnñopqrstuvwxyz";
    let palindromo = true;
    console.log(str_1);
    //Quitar acentos de las vocales
    for (let i = 0; i < str_1.length; i++) {
        if ("àá".indexOf(str_1[i]) != -1) {
            str_2 += "a";
        } else if ("éè".indexOf(str_1[i]) != -1) {
            str_2 += "e";
        } else if ("íì".indexOf(str_1[i]) != -1) {
            str_2 += "i";
        } else if (("óò".indexOf(str_1[i]) != -1)) {
            str_2 += "o";
        } else if ("úúü".indexOf(str_1[i]) != -1) {
            str_2 += "u";
        } else if (letras.indexOf(str_1[i]) != -1) {
            str_2 += str_1[i];
        }


    }

  
    
    // realiza una copia de string pero a la inversa.
    for (let i = str_2.length - 1; i >= 0; i--) {
        str_3 += str_2[i];
    }
    //Compara copia inversa con original 
    console.log(str_2);
    for (let i = 0; i < str_2.length; i++) {
        if (str_2[i] != str_3[i]) {
            palindromo = false;
        }
    }
    //respuesta 
    if (palindromo) {
        document.write("Sí es un palindromo");
        console.log("Sí es un palindromo");
    } else {
        console.log("No es un palindromo");
        document.write("No es un palindromo");
    }
}