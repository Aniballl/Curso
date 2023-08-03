/**
 * Estructuras de control de flujo
 * --------------------------------
 * Bucle for: La estructura FOR PERMITE REPETICIONES
 * for(inicialización; condicion;incremento){
 * }
 */
for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");
//La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecución de las instruciones definidas dentro del for. Además, despues de cada repetición, actualiza el valor de las variables que se utilizan en la condición".
//Ejemplo de un bucle con los distintos <hx> del html
function salidaH(){
    for(let i=1;i<=6;i++){
        document.write("<h"+i+">"+"Encabezado de nivel"+i+"</h"+i+">");
    }
}
/**Ejercicio
 * El factorial de un numero entero n es una operación matematica que consiste en multiplicar todos los factors n
 * utilizando la estructutra for, crear un script que calcule el factorial de un número entero
 */
function calFact(){
    let numero=document.getElementById("numero").value;
    //borrar el contenido de eses selectores
    document.getElementById("msnError").innerHTML="";
    document.getElementById("resultadoFact").innerHTML="";
    //verificar que lee correctamente el numero
    console.log(numero);
    if(isNaN(numero)){//si no es un numero 
        //ha cometido un error al introducir el numero
        let msnError="Indique un numero, no letras!!";document.getElementById("msnError").innerHTML=msnError;
        
    }else{
        //hacemos el bucle factorial
        let resultado=1;//se inicializa en 1
        //bucle
        for(let i=1;i<=numero;i++){
            resultado*=i;
        }
        document.getElementById("resultadoFact").innerHTML=resultado;
    }
}
/**
 * Estructura for...in
 * -estructura de control, implica el uso de objetos, 
 * se usa en Arrays 
 */
function mostrarDias(){
    let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
    let etiqueta;
    for(i in dias){
        etiqueta="etiqueta"+i;
        document.getElementById(etiqueta).innerHTML=dias[i];
    }
}