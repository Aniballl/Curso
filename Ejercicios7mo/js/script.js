//Escribir un codigo de una función a la que se pasa como parametro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o inpar. Mostrar por pantalla el resultado devuelto por la función.

function leerDato(){
    let numero=document.getElementById("numero").value;
    if(validarDato(numero)){
        if(numero%2==0){
            document.getElementById("resultado").innerHTML="El número "+numero+" es par";
        }else{
            document.getElementById("resultado").innerHTML="El número "+numero+" es inpar";
        }
    }
}
//los parametros o atributos que se pasan en una función NO tienen por que llamarse igual que en la función origen.
function validarDato(dato){//inportante para validar un número
    if(isNaN(dato) || dato==""||dato.includes(" ")){//Con el includes, no te va a dejar poner espacios, ni aun habiendo números. 
        document.getElementById("resultado").innerHTML="Error. Indique un numero valido";
    }else{
        return true;
    }
}

//Definir una función que nuestre información sobre una cadena de texto qu se le pasa como argumento. Apartir de la cadena que se le pasa, la función determinara si esa cadena está formada solo por mayúsculas, sólo por minusculas o por una mezcla de ambas.
function leerTexto(){
    let texto=document.getElementById("texto").value;
    if(isNaN(texto) && texto!=""){
       validarTexto(texto);
    }else{
        document.getElementById("resultadoTexto").innerHTML="Escribe una cadena, solo letras!";
    } 
    }
   
function validarTexto(texto){
    if(texto==texto.toUpperCase()){
        document.getElementById("resultadoTexto").innerHTML="El Texto esta en mayúscula->"+texto.toUpperCase();
    }else if(texto==texto.toLowerCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minuscúla->"+texto.toLowerCase();
    }else{
        document.getElementById("resultadoTexto").innerHTML="El texto esta en mayúsculas y minuscúlas";
    }
}

//Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palindromo, es decir, si se lee de la misma dorma dede la izquerda y desde la derecha. Ejemplo de palindromo complejo:"La ruta nos aporto otro paso natural".
function leerPalindromo(){
    let palindromo=document.getElementById("palindromo").value;
    let texto;
    if(isNaN(palindromo)){
        texto="Palindroma";
        }else{
            texto="Capicua";
        }
    if(palindromo!=""){
        if(validarPalindromo(palindromo)){
            document.getElementById("resultadoPalindromo").innerHTML="La frase "+palindromo+" es "+texto;
         }else{
            document.getElementById("resultadoPalindromo").innerHTML="La frase "+palindromo+" No es "+texto;
        }
    }else{
        document.getElementById("resultadoPalindromo").innerHTML="Indica una frase o palabra valida"
    }    
}
function validarPalindromo(texto){
    //pasar todo a minúscula y eliminar los espacios en blanco
    let cadenaOriginal=texto.toLowerCase().replaceAll(" ","");
    //convertir la cadena en un array separnado por letras
    let letrasEspacios=cadenaOriginal.split("");
    //convertir la cadena en un array separando por letras y invertido
    let letrasReves=cadenaOriginal.split("").reverse();
    console.log(letrasEspacios);
    console.log(letrasReves);
    //cerramos el array en cadena
    let cadena1=letrasEspacios.join("");
    let cadena2=letrasReves.join("");
    //comparamos las dos cadenas
    if(cadena1==cadena2){
        return true;
    }else{
        return false;
    }
}