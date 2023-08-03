/**Funciones en JavaScript
 * -Es un bloque de código definida con un nombre, que puede ser invocada desde el mismo javascript o desde el documento HTML.
 */
function sumar(){
    let a=5,b=3;
    let suma=a+b;
    return suma; //retorna un valor.
}
console.log(sumar());//Recibimos el resultado de la operación en la función
//**Otro ejemplo de la función donde los valores de a y b no estan definidas */
function sumar2(){
    let suma=a+b;
    return suma;
}
//la declaración de a y b tiene ambito local, y solo tienen valor en la función sumar()
//Tenemos que declarar las variables a y b, por ejemplo con ambito global
let a=12,b=15;
console.log(sumar2());
//función con argumentos o valores que recibe
function multiplicar(primerN,segundoN){
    return primerN*segundoN;
}
//se tiene qu pasar los argumentos que se necesita para poder realizar la operación 
console.log(multiplicar(25,3));
console.log(multiplicar(5,48));
console.log(multiplicar(a,b));
/**El orden de los argumentos es fundamental, ya que le primer dato que se indica en la llamada, será el primer valor que espera la función; el segundo valor indicado en la llam,ada, es el segundo valor que espera la función y asi sucesivamente*/
function dividir(primerN,segundoN){
    return segundoN/primerN;//0/5//
}
console.log(dividir(5,0));

/**Ejercicio1: calcula el precio + iva de los siguientes productos:
leche=0,76
agua=1,05
cereales=2,35
mermelada=1,96
tomando en cuenta el iva es el 4%
porcentaje =(valor*porcentajeDado)+valor*/
function calcular(producto){
    let iva=1.04;
    return iva*producto
}
let leche=0.76;
let agua=1.85;
let cereales=2.35;
let mermelada=1.96;
console.log(calcular(leche).toFixed(2));
console.log(calcular(agua).toFixed(2));
console.log(calcular(cereales).toFixed(2));
console.log(calcular(mermelada).toFixed(2));
//tofixed para los decimales, y para hacer esto se le da un valor como es producto y luego solo se pone el let en el console, pero no el iva que ya es pueto en la función 
//Se Puede almacenar el resultado de una función en una variable
//se remplaza los valores de a y b con el resultado de las funciones llamadas
a=multiplicar(4,85);
console.log("a="+a);
b=dividir(64,32);
console.log("b="+b);
let r3=sumar2();
console.log(r3);
