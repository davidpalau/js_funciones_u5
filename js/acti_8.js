/**
 * ACTIVITY 8 – Function to detect anagrams 
- Create a function to which a series of texts are passed (minimum 2) and detect if they are 
anagrams or not. 
- An anagram is a word that results from transposing the letters of another: for example 
STUDY and DUSTY. 
- The function returns true if all past words are anagrams of the same letters.

 */
function esAnagrama(palabra_1, palabra_2){
//Esta es la función que pide el ejercicio el resto es relleno, no es necesaria más de una linea dentro de la función 
    return palabra_1.toLowerCase().split("").sort().join("") === palabra_2.toLowerCase().split("").sort().join("");
}

 window.addEventListener("load", inicio, true);

 function inicio() {
    let i = 0;
    arrayAnagrma = [];
    let str_1 = window.prompt("Introduce la primera palabra: ");
    let continuar = true;
    arrayAnagrma[i]= str_1;
    while(continuar){

        let str_2 = window.prompt("Para terminar introduce una palabra que no sea anagrama de la primera. Introduce otra palabra: ");
        str_1 = quitarAcentos(str_1);
        str_2 = quitarAcentos(str_2);
        continuar = esAnagrama(str_1, str_2);
        if(continuar){
            i++;
            arrayAnagrma[i]=str_2;
        }else{
            document.write("<p>La última palabra "+ str_2 +" no es anagrama del resto.</p>");

            if(arrayAnagrma.length > 1){
                document.write("<p>Las palabras: ");
                arrayAnagrma.forEach(element => {
                    document.write( element + ", ");
                });
            document.write(" son anagramas entre ellas. </p>");
            }else{
                document.write("No has introducido anagramas de la palaba: " + str_1+".");
            }


        }
     

    }

    
  



     

    }

    function quitarAcentos(str_1){
        let str_2 = "";
        let str_3 = "";
        let letras = "abcdefghijklmnñopqrstuvwxyz";
        let palindromo = true;
        //Quitar acentos de las vocales sin utilizar expresiones regulares. igual que en las actividades de los arrays.
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
        return str_2;
    }

  