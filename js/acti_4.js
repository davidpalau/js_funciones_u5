/**
 * ACTIVITY 4 – Sort words in reverse order 
− Create an application that prompts the user for words continuously until a textless box is 
accepted or canceled. 
− Repeated words will be eliminated. The words entered will be shown in order in Spanish, but 
in reverse order (from Z to A) 

 */
window.addEventListener("load", inicio, true);

function inicio(){
    let array = [];
    let i = 0
    let str = window.prompt("Introduce una palabra:");
    while(!(str == null || str == "")){
     array[i]= str;
        str = window.prompt("Introduce otra palabra:");
        i++;
    }
  ordenInverso(array);

}
function ordenInverso(palabras){

palabras.sort((a, b)=> a.localeCompare(b));
palabras.reverse();
console.log(palabras);
palabras.forEach(element => {
    document.write(" "+ element);
});
}