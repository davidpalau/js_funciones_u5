


function fibonacci(n) {
    if (n == 0 || n == 1) {
        //En caso de posición 0 y 1 en valor coincide con la posición 
        return n;
    } else if (n >= 2) {
        return fibonacci(n - 1) + fibonacci(n - 2);

    }
   
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
document.write(fibonacci(0));
document.write("<br>");
document.write(fibonacci(1));
document.write("<br>");
document.write(fibonacci(2));
document.write("<br>");
document.write(fibonacci(3));
document.write("<br>");
document.write(fibonacci(4));
document.write("<br>");
document.write(fibonacci(5));
document.write("<br>");
document.write(fibonacci(6));
document.write("<br>");
document.write(fibonacci(7));