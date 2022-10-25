/**
 * ACTIVIDAD 2 – Función que dibuja una tabla
− Crear una función en JavaScript que nos permita dibujar una tabla en una página web.
− Pasarás 2 parámetros a la función, indicando el número de filas y columnas. Por
por defecto, la función tomará 10 filas y 4 columnas.
− La tabla se crea con un borde negro de 1 píxel entre cada celda, pero un tercer parámetro
permite indicar el color (por defecto será negro). El borde exterior medirá 3
píxeles y siempre será del mismo color que el borde de las celdas.
− La tabla ocupará todo el ancho de la página.
− Utilice la función para crear una tabla con un borde negro de 10 filas y 4 columnas
− Úselo nuevamente para crear una tabla de 20 filas y 10 columnas, con un borde negro.
− Finalmente, dibuja 10 tablas de 5 filas y 4 columnas que tengan un borde verde.
 */


function tabla(filas_1 = 10, columnas_1 = 4, color_1 = "black"){

   document.body.style.tableLayout.borderColor = "red";

document.write("<table>");
for(let i = 0; i < filas_1; i++){
    document.write("<tr>");
for(let j = 0; j < columnas_1; j++){

    document.write("<td> Celda </td>");
}
document.write("<tr>");
}
document.write("</table>");
}

tabla();