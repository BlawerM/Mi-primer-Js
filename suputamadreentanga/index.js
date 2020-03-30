var num1;
var num2;
var request = "";

request = prompt("Ingrese el tipo de operación:");

num1 = parseInt ( prompt ("Ingrese numero 1: ") );
num2 = parseInt ( prompt ("Ingrese numero 2: ") );



if (request.toLowerCase() == "suma"){
    result = num1 + num2;
}
else{
    alert ("SOLO SUMA ");
}





document.write ("<h1>" + result + "</h1>");