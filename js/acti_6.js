/**
 *  ACTIVITY 6 – Fibonacci recursive function 
− The Fibonacci function is a classic of recursive programming. It is a function related to a 
succession of elements where the first 2 are 0 and 1, and the rest are the sum of their 
previous 2. 
− That is, the succession is 0,1,1,2,3,5,8,13,21,34,55,89,etc. 
− We would send a number to the function of which we want to know the value of Fibonacci 
and it would return that value to us. So if we pass the number 10, it would return 55. 
− The recursive solution is much easier, but it would be interesting to also do the non-
recursive solution. 

 */

function fibonacci(n) {
    if (n == 0 || n == 1) {
        //En caso de posición 0 y 1 en valor coincide con la posición 
        return n;
    } else if (n >= 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);

    }
   
}
console.log(fibonacci(2));
console.log(fibonacci(2));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
console.log(fibonacci(9));


window.addEventListener("load", inicio, true);

function inicio() {
    let num = parseInt(prompt("Introduce un número positivo: "));
    if (isNaN(num)) {
        alert("No es un número.");
        inicio();
        ini
    } else if (num < 0) {
        alert("Has introcido un número negativo.");
        inicio();
    }
    document.write("En número fibonacci que corresponde es " + fibonacci_1(num));
}
//Con array es facil de hacer por que se entiende mejor.
function fibonacci_1(n) {
    let fiboArray = [0, 1]
    if (n == 0 || n == 1) {
        //En caso de posición 0 y 1 en valor cuicide con la posición 
        return n;
    } else if (n >= 2) {
        for (let i = 2; i <= n; i++) {
            fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2];

        }
    }
    return fiboArray[n];

}

//Pruebas para estar seguro que funciona.
console.log(fibonacci_1(2));
console.log(fibonacci_1(2));
console.log(fibonacci_1(5));
console.log(fibonacci_1(6));
console.log(fibonacci_1(7));
console.log(fibonacci_1(8));
console.log(fibonacci_1(9));






