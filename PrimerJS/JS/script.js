/**
 * Este script enseña 
 * 1.Comentarios
 * 2.Insertar codigo HTML con domuent.getElementByTd.innerHTML
 * 3.Leer codigo desde el HTML con document.getElementByID.value
 * 4.Declarar Variables - Tipos de variables
 * 5.Asignar valores a variables
 * 6.Mostrar en la consola del navegador salidas-> console.log
 * 7.Crear operaciones matematicas básicas
 * 8.Declarar una función
 * 9.Llamar una función desde HTML/ Llamar una función dede el mismo javaScript->miFuncion()
 * 10.Convertir un valor de cadena a uno entero con parseINT
 * 11.Incremento y decremento de valores con ++ --
 * 12.Declarar constantes 
 * 13.Caracteres de escape en cadena de caracteres 
 * 14.Alertas
 * 15.Document.write
 */
//comentarios de linea
/*
comentarios de bloque
*/
alert("Hola Mundo de Desarrollo Web");
//acceder a los elementos por id del html
//1. crear una varable-> un lugar en memoria donde se almacena un valor
//1.1 declarar la variable indicando un nombre-(comenzar: letras,,no numeros, no por caracteres especiales)
// debe ser en minuscula o tipo camello->nombreDelUsiario
// no debe de contener espacios (no-> nombre del usuario)
//se puede utilizar barra baja_ tanto en el comienzo como en el contenido del nombre, una buena practica es comenzar con letras o con $
let nombre="Lucia Fariñas";// las comillas indican que es una cadena de caracteres
//declaramos una variable llamada parrafo que se enlaza con el id del html
let parrafo=document.getElementById("parrafo");
//le indicamos a esa variable que insete el valor de la otra varieble nombre
parrafo.innerHTML=nombre;
//console.log-> es una instrucción que se muestra en la consola del navegador;
console.log(nombre);
document.getElementById("demo").innerHTML="Hello JavaScritp";
//variables tipo entero
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido="Blázquez";
//remplazo el valor de nombre concatenando con el apellido
nombre=nombre+" "+apellido;
//concatenar cadenas de caracteres
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;
//caracteristicas de javaScript ...no declaras el tipo de dato
numero1="uno";
suma=numero1+numero2;
console.log(suma);//es una manera de visualizar una salida en javaScript

//crear mi primera fusión->serie de funciones que se ejecutaran cuando sea llamada
/**
* la siguiente funcion muestra una lerta e inserta un parrafo en lugar donde se identifica
* id=parrafo1
*/
function mostrarAlerta(){
    alert("Macarroenes Coming Sonn");
    
    document.getElementById("parrafo2").innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque minima perspiciatis in quae quo explicabo molestiae inventore dolores necessitatibus dolore aliquid, error accusamus est porro repellat eius blanditiis natus officiis.";
}

//otra manera de llamarlo->Esta tiene prioridad por el onclick, que le da prioridad a los elementos, aunq esten colocados depues o antes
document.getElementById("boton1").onclick=function(){
    alert("Quiero dormir");
}

function suma2(){
    //leemos del formulario los valores que se ingresen
   let x= parseInt(document.getElementById("numero1").value);
   let y= parseInt(document.getElementById("numero2").value);

   document.getElementById("suma2").innerHTML="El valor de x es"+x+"El valor de y es"+y+"y la suma de estos dos valores es"+(x+y);
}
/*Paso de parametros a una función*/
document.getElementById("suma").innerHTML=myFuncion(45,34);
function myFuncion(a,b){
    return a+b;
}

//existe otra manera de declarar las variables <2015
var nombreAlumno="Lucia Fariñas";
console.log(nombreAlumno);
//diferencia entre var y let
var nombreAlumno="Aníbal García";
console.log(nombreAlumno);
//ejemplo let
let nombrePadre="Jose María";
console.log(nombrePadre);
//no se puede declarar de nuevo una variable con let 
//el mismo bloque de codigo->Suelto no se puede, pero si lo metes dento de una funcion si por que lo separa del bloque
function otroNombre(){
    let nombrePadre="Eduardo Fariñas";
    console.log("Dentro de la funcion->"+nombrePadre);
}
otroNombre();//llamamos la función para que se ejecute
console.log("Fuera de la funcion->"+nombrePadre);
//en la declaración de las variables se pueden declarar una o mas variables en la misma linea
//var nombreMadre;//declaración->indicando que nombreMadre es una variable
let nombreMadre="María del Pilar",nombreNino="Jacob García",colegio="Santa Ana";
//las variables no ests obligado a declararlas, pero es importante y buena practica
edad=15;//tipo de numeros entero..
console.log(edad);
precio=5,8;//decimal 
edad=18//reemplaza el valor
console.log(edad);
nombreMadre="María Isabel";//le asigno a la variable de nombreMadre el valor de María Isabel
console.log(nombreMadre);
//Lo que guarda en una variable
//tipos-> -números (5,4,5.97,etc),     -cadena de caracteres ("El nombre es") -boleanos (true, flase)->(verdadero,falso)                                
let miBoleano=true;//on off- 0/1 
//las cadenas de carcteres existe la limitante de utilizar ""dentro de una cadena
//Para ello existe caracteres de escape en dacenas de texto
let cadena="esta es una cadena\"muy inportante\"de javaScript";
console.log(cadena);
//puedes convinar las dobles comillas con las comillas simples
let cadena2='esta es la segunda cadena "muy inportante"';
console.log(cadena2);
cadena="esta es una cadena 'muy inportante' de javaScript";
console.log(cadena);
//salto de linea con caracteres de escape \n
cadena="esta es una cadena 'muy inportante' \nde javaScript";
console.log(cadena);
/**Operadores Matemáticos
 *  +-+/->operaciones basicas
 *  %->módulo o resto de los números
*/
x=10;
y=2;
let modulo=10%2; //da como resultado el resto de la división
console.log("el módulo entre 10/2 es "+modulo);
let operacion=(x+2)*2-(y/3);
console.log(operacion);
/**
 * Operadores de asignación
 *  =asigna
 *  +=incrementa el numero->x=x+2
 *  -=
 *  /=
 *  += */
x+=2;//x=12
console.log(x);
x-=2;//x=10
console.log(x);
x*=2;
console.log(x);
x/=2;
console.log(x);

//se puede utilizar el operador de asignación += en las cadenas de caracteres
cadena+=cadena2;
console.log(cadena);

//operador de exponencial
x=y**10;
console.log(x);
//operador incremento
++y;
console.log(y);
//operador decremento
--y;
//salida de pantalla directamente insertando el texto en la últim linea disponible
document.write("El valor de y es "+y);
/*
                        -Constantes-
    No cambian en el resto del programa, se declara con la "palabra reservada"->palabraspropias del mensaje<- const y se debe asignar su valor cuando es declarada
    PALABRAS RESERVADAS---> Propias del lenguaje= let, var, const...
*/
const PI=3.141618;//las constantes se declaran en mayusculas
const RUEDASCOCHE=4;
const MONEDA=5;
//área de un circulo area=r**2xPI
let area=(50**2)*PI;
console.log("El área de una circunferencia de radio 50 es "+area);
