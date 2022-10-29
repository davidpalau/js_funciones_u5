

function fibonacci_1(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1 || n == 2) {
        return 1;
    } else if (n == 3) {
        return 2;
    }
    else {
        return fibonacci_1(n - 1) + fibonacci_1(n - 2) + fibonacci_1(n - 3);
    }

}

//Pruebas para estar seguro que funciona.
//Pruebas para estar seguro que funciona.
console.log(fibonacci_1(0));
console.log(fibonacci_1(1));
console.log(fibonacci_1(2));
console.log(fibonacci_1(3));
console.log(fibonacci_1(4));
console.log(fibonacci_1(5));
console.log(fibonacci_1(6));
console.log(fibonacci_1(7));
console.log(fibonacci_1(8));
console.log(fibonacci_1(9));
console.log(fibonacci_1(10));
console.log(fibonacci_1(11));
console.log(fibonacci_1(12));
console.log(fibonacci_1(14));
console.log(fibonacci_1(15));
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






