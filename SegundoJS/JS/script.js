/**
 * 1.Operadores Comparación
 * 2.Operadores Logicos - Y/O           
 */
//Los operadores Logicos devuelven un resultado-> boleano true o flase indicando si la comparación se cumple o no
let x=2,y=3;
//Comparar si son iguales
let resultado=(x==y);
document.getElementById("comp1").innerHTML=resultado;
//comparar si son diferentes
resultado=(x!=y);
document.getElementById("comp2").innerHTML=resultado;
//Comparar si un numero es mayor que otro
resultado=(x>y);
document.getElementById("comp3").innerHTML=resultado;
//comparar si un numero es mayor o igual a otro
resultado=(x>=y);
document.getElementById("comp4").innerHTML=resultado;
//comparar si un numero es menor a otro
resultado=(x<y);
document.getElementById("comp5").innerHTML=resultado;
//Comparar si un numero es menor o igual a otro
resultado=(x<=y);
document.getElementById("comp6").innerHTML=resultado;
//comparar si son iguales en contenido y en tipo de dato 
let z="2";//tipo de cadena de texto
resultado=(x===z);
document.getElementById("comp7").innerHTML=resultado;

//Operadores Logicos - Operador Y representado por &&
resultado=(x==y)&&(x===z);//flase false->false
document.getElementById("comp8").innerHTML=resultado;
resultado=(x==y)&&(x==z);//false true->false
document.getElementById("comp9").innerHTML=resultado;
resultado=(x<y)&&(x==z);//true true->true
document.getElementById("comp10").innerHTML=resultado;
//Operador logico - OR y se representa con dos barras-> ||
resultado=(x==y)||(x===z);//flase false->false
document.getElementById("comp11").innerHTML=resultado;
resultado=(x==y)||(x==z);//false true->true
document.getElementById("comp12").innerHTML=resultado;
resultado=(x<y)||(x==z);//true true->true
document.getElementById("comp13").innerHTML=resultado;
//Operador ternario-> evaluar una condición y si se cumple hace algo y si no se cumple tambíen hace otra cosa Estructura-> expresión? valor o ejecución si es verdadero : valor o ejecución si es falso
let muestra=x<y?"X es menor que Y":"X es mayor que Y";
document.getElementById("muestra").innerHTML=muestra;
