/**
 * ACTIVITY 3 – Function that allows you to know if a number is prime  
− Create a function that lets you know if a number is prime or not. 
− A number is prime if it cannot be divided by another number (not counting the one or the 
number itself), giving a remainder of zero. 
− Take advantage of the function created to create a web page that writes the prime numbers 
from 1 to 1000.
ACTIVIDAD 3 – Función que te permite saber si un número es primo
− Crear una función que te permita saber si un número es primo o no.
− Un número es primo si no se puede dividir por otro número (sin contar el uno ni el
mismo número), dando un resto de cero.
− Aprovecha la función creada para crear una página web que escriba los números primos
de 1 a 1000.
 */

function primo(numero){
   // num_primo = false;
    for( let i = 2; i<= (numero/2);i++ ){
        if(numero%i == 0){
            return " no es primo.";
        }
    }
    return " es primo.";
}
for(let i = 2; i <= 1000; i++){
    document.write("El número "+i+ primo(i));
}
