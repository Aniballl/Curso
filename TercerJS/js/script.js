/**
 * Matrices o vectores-> Arrays (Arreglos)
 * La declaración de variables aisladas como por ejemoplo los días de la semana
 */
let dia1="lunes"
let dias2="Martes"
/**Aunque la declaración de anterior es correcta, es mas eficiente cuando tenemos una colección de datos que guardan relación, crear Arrays 
 * 
 * sintaxis de un array
 * let nombre_array=(valor1,valor2,...valorn)
*/
let dias=["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

/**
 * Aspectos inportantes para el uso de Array
 * 1. Cada elemento tiene un indice
 * 2.Los indices comienzan en 0->Lunes=0
 * 3.Para acceder a un elemento lo tengo que llamar con el nombre del array y su indice-> dias[0]->Lunes
 * 4.Puedo conocer el numero de elementos de un Array. 
 */
document.getElementById("dia0").innerHTML=dias[0];
document.getElementById("dia1").innerHTML=dias[4];
document.getElementById("dia2").innerHTML=dias[6];

/**Ejercicio: Realiza un array con los meses del año y muestra por pantalla al menos 3 meses de verano*/
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
document.getElementById("mes1").innerHTML=meses[7];
document.getElementById("mes2").innerHTML=meses[5];
document.getElementById("mes3").innerHTML=meses[6];

/** Apartir del siguiente array que se proporciona: */
let valores=[true,5, false, "hola", "adios",2];
/**
 * .Determinar cual de los dos elementos numericos es mayor
 * .Utilizando exclusivamente los mdos valores boleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false.
 * Determinar el resultado de las cinco operaciones matematicas realizadas con los dos elementos numéricos
 */
let resultado1=valores[1]>valores[5]
?"El valor del indie 1 es mayor":"El valor del índice 5 es mayor";
document.getElementById("resultado1").innerHTML=resultado1;
//resultado true
let resultado2=valores[0] ||valores[2];
//true|| false-> true
document.getElementById("resultado2").innerHTML=resultado2;
let resultado3=valores[0]&&valores[2];
//true|| false-> false
document.getElementById("resultado3").innerHTML=resultado3;
//Ejercicio 3
let operacion=valores[1]+valores[5];
console.log(operacion);
document.getElementById("operacion").innerHTML=operacion;//->
let operacion2=valores[1]-valores[5];
console.log(operacion2);
document.getElementById("operacion2").innerHTML=operacion2;//->
let operacion3=valores[1]/valores[5];
console.log(operacion3);
document.getElementById("operacion3").innerHTML=operacion3;//->
let operacion4=valores[1]*valores[5];
console.log(operacion4);
document.getElementById("operacion4").innerHTML=operacion4;//->
let mod0=valores[1]%valores[5];
document.getElementById("mod").innerHTML=mod0;//->
//manera mala es esta de arriba, la buana la de abajo 
let suma=valores[1]+valores[5];
let resta=valores[1]-valores[5];
let multi=valores[1]*valores[5];
let div=valores[1]/valores[5];
let mod=valores[1]%valores[5];
document.getElementById("resultado4").innerHTML='El resultado de las operaciones son: \nSuma: '+suma+'\nResta: '+resta+ '\nMultiplicación: '+multi+'\ndivision:' +div+ '\nModulo: '+mod;
/**
 * Repaso:
 * ++valores[1]->6
 * --valores[1]->5
 * valores[1]+=vlores[5]->7
 * valores[1]=valores[1]+valores[5]->7
 */
/**Condicional IF-ELSE */
//Complejas, deja poner mucha mas información
let edad=21;
if(edad>=18)//Condición
{//grupo de instrucciones
    ++edad;
    let cumple="El año que viene tendras "+edad;
    let mensaje=" puedes ir a la Discoteca.";
    document.getElementById("mensajes").innerHTML=cumple +" años y" +mensaje;
}else// sino se cumple la condición viene al ELSE
{
    let mensaje="Espera un poco"
    document.getElementById("mensajes").innerHTML=mensaje;
}
//Sencillas
let mensaje=edad>=18?"Entras":"no entras";
let mostrar=true;
if(mostrar){//mostrar==true
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es verdadero";
}else{
    document.getElementById("mostrado").innerHTML="NO Entro al if, sino al Else porque mostrado es falso";
}
//Cuando necesitamos evaluar la negación de un booleano(true/false) utilizamos el simbolo ! antes de la variable
if(!mostrar){//mostrar ==false
    document.getElementById("mostrado2").innerHTML="Entro al if porque mostrado es verdadero";
}else{
    document.getElementById("mostrado2").innerHTML="NO Entro al if, sino al Else porque mostrado es falso";
}
/**Ejercicio-> CONDICIONALES INDEPENDIENTES*/
let numero1= 5;
let numero2= 8;
if(numero1<numero2){
    alert("numero1 NO es mayor que numero2");
}
if(numero2>0){
    alert("numero2 es positivo");
}
if(numero1<0 || numero1!=0){
    alert("numero1 es negativo o distinto a cero");
}
if(++numero1<=numero2){
    alert("Incrementar en 1 unidad el valor de numero1 no lo hac mayor o igual que numero2");
}
/**Existe la opcion de anidar if - else-if-else */
//si eres <12 años eres pequeño, sieres <19 eres adolescente, si eres <35 años sigues siendo joven, sino.... "Cuidate mucho"
let nEdad=42
let msnEdad;
if(nEdad<12){
    msnEdad="Todavia eres muy pequeño";
}else if(nEdad<19){
    msnEdad="Eres Adolescente";
}else if(nEdad<35){
    msnEdad="Todavia eres joven"
}else{
    msnEdad="Cuidate mucho!"
}
document.getElementById("msnEdad").innerHTML=msnEdad;