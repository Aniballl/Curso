/**
 * if-else-> tambien existe otra estructura de conreol de flujo que es switch-case
 * Su función es: segun el parametro o el valor que contenga, puede realizar una serie de opciones
 * Ej:
 * switch(expresión){
 * case x
 *  //codel block
 * break;
 * case y:
 *  //code block
 * brak;
 * deffault:
 *  //code block
 * }
 * Asi es como funciona:
 * La expresión de cambio se evalúa una vez.
 * El valor de la expresión se compara con los valores de cada caso. Si hay una coincidencia, se ejecuta el bloque de codigo asociado. Si no hay ninguna coincidencia, se ejecuta el bloque de código predeterminado (default).
 */
//Ejemplo sencillo
let dia=new Date().getDay();
//let dia=2
console.log(dia);
let diaS; //declaramos una variable donde fuardamos el nombre del dia
switch(dia){ //5
    case 1:
        diaS="Lunes"
        break;
     case 2:
        diaS="Martes"
        break;
    case 3:
        diaS="Miercoles"
        break;
    case 4:
        diaS="Jueves"
        break;
    case 5:
        diaS="Viernes"
        break;
    case 6:
        diaS="Sabado"
       break;
    case 7:
        diaS="Domingo"
        break;
    default:
        diasS="Este dia no existe";         
}
document.getElementById("dia").innerHTML=diaS;
/**
 * Ejercicio:
 * De la base de la puntuación numerica de los alumnos, indicamos del 0 al 4 -> Insuficiente del 5 al 6-> bien, del 7-8->notable, y del 9-10->Sobresaliente.
 */
let nota= 7
console.log(nota);
let notaS;
switch(nota){
    case 1:
    case 2:
    case 3:
    case 4:
        notaS="Insuficiente";
        break;
    case 6:
    case 5:
        notaS="Bien";
        break;
    case 8:
    case 7:
        notaS="Notable";
        break;
    case 9:
    case 10:
        notaS="Sobresaliente";
        break;
    default:
        notaS="Esta no es tu nota";
}
document.getElementById("nota").innerHTML=notaS;
//Calcualar nota
function notaT(){
    let notaZ=document.getElementById("notaT").value;
    let msnNota;
    if(notaZ <0||notaZ >11 || notaZ== ""){
        let msnError="Indique bien su nota";
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        if(notaZ <5){
            msnNota="Suspenso"; 
         }else if(notaZ<7){
            msnNota="Bien";
        }else if(notaZ<9){
            msnNota="Notable"
        }else if(notaZ<=10){
            msnNota="Sobresaliente"
         }else{
            msnNota="Ponlo bien bobo"
         }
        document.getElementById("resultado").innerHTML=msnNota;
    }
}
/**
 * for(let i=1; i<10; i++)
 * Ejercicio: Mostrar en consola los numeros del 1 al 20 de mayor a menor
    for(let i=20; i>0;i--)
*/
for(let i=20;i>0;i=i-2){
    console.log(i);
}
//bucle for each->
function cambiarColor(){
let colores=["#2812","#1301","green","#2828","orange","#1313"]
let indice=parseInt(document.getElementById("numero").value);
--indice;
for(let i=0;i<colores.length;i++){
    if(i==indice){
        //cambiar el color a el div caja
        document.getElementById("caja").style.backgroundColor=colores[i];
        document.getElementById("dia").style.color=colores[i];
    }
}
//recorrer el array con un for of 
for(let i of colores){
    //recorremos todos los elementos del array
    document.getElementById("caja2").style.backgroundColor=i;
    document.getElementById("caja2").style.transition="width 2s, height 2s, transform 2s";
    document.getElementById("caja2").style.transform="rotate(180deg)";
}
//si ponemos iten en vez de i, item=contiene el valor no el indice, mientras q i contiene el indice, esto de devido al if de antes de i que es == a indice, mientras q item coje directamente el valor.  
/**transiyion-property: width;
 * transition-duration: 2s;
 * transition-property: height;
 * transition-delay: 2s;
 */
}
