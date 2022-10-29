//window.addEventListener("load", inicio, true);

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
    let fiboArray = [1, 1, 2]
    if (n == 0 || n == 1 || n == 2) {
        //En caso de posición 0 y 1 en valor cuicide con la posición 
        return fiboArray[n];
    } else if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            fiboArray[i] = fiboArray[i - 1] + fiboArray[i - 2] + fiboArray[i - 3];

        }
    }
    return fiboArray[n];

}

//Pruebas para estar seguro que funciona.
console.log(fibonacci_1(0));
console.log(fibonacci_1(1));
console.log(fibonacci_1(2));
console.log(fibonacci_1(3));
console.log(fibonacci_1(4));
console.log(fibonacci_1(5));
console.log(fibonacci_1(6));
console.log(fibonacci_1(7));
document.write(fibonacci_1(0));
document.write("<br>");
document.write(fibonacci_1(1));
document.write("<br>");
document.write(fibonacci_1(2));
document.write("<br>");
document.write(fibonacci_1(3));
document.write("<br>");
document.write(fibonacci_1(4));
document.write("<br>");
document.write(fibonacci_1(5));
document.write("<br>");
document.write(fibonacci_1(6));
document.write("<br>");
document.write(fibonacci_1(7));



