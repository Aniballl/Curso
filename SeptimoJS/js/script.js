/**Concepto basico de funciones o métodos:
* Una función JavaScript es un bloque de código para realizar una tarea particular.
Unafunción JavaScript se ejecuta cuando "algo" lo invoca(lo llama).

las funciones pueden ser propias, cmo por ejemplo:
funtion guardarNombre(){
    ...bloque de intrucciones
}
*   Para que se ejecute ese bloque de intruciones, la funcion tiene que ser invocada ya sea en un javascript o dede el html
guardarNombre();
o dede html....onclik="guardarNombre()"

También existen funciones propias del lenguaje, que os realizan algunas tareas de manera automatica.
Ejemplo: Funciones útiles para cadenas de texto
*/
//Funcion para conocer la longitud de una cadena, incluyendo los espacios
let cadena1="Hola, como estais todos mañana?";
let nLetras=cadena1.length;
console.log(nLetras);

//funcion que concatenar
let cadena2=" Bien, gracias!";
let cadena=cadena1.concat(cadena2);//es lo mmismo cadena1+cadena2
console.log(cadena);
//Concatenar es un bucle
for(let i=1; i<cadena1.length;i++){
    cadena+=cadena1;
}
console.log(cadena);

//Función para pasar de mayuscula una cadena de texto
cadena1=cadena1.toUpperCase();
console.log(cadena1);

//función para convertir una cadena a minuscula
cadena1=cadena1.toLowerCase();//toLocalLowerCase->se refiere al idioma o configuración local, pero el resultado puede ser el mismo que toLowerCase
console.log(cadena1);

//Función para obtener el carácter que se encuentra en la posición indicada
let letra=cadena1.charAt(0);//retorna h
console.log(letra);

//función indexOf(letra)calcula la osición en la que se encuentra la letr indicada, siemrpe mostrará la primera posición
let posicion=cadena1.indexOf("a");
console.log(posicion);

//lastIndexOf calcula la ultima posición del caracter indicado, tanto indexOf como latIndexOf devuelven -1 si no encuentran ese caracter.
posicion=cadena1.lastIndexOf("x");
console.log(posicion);

/**inportante:
 * La función lasIndexOf() comienza su búsqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra */

//Función para extraer de una cadena
// substring(inicio, final), extra una posición de una cadena de texto. El segundoparametro indica el parámetro inicio, la función decuelve la parte de la cadena original correspondiente hasta el final
let subcadena1=cadena1.substring(6,10);
console.log(subcadena1);
/**Cuandpo se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entre la inicial y la inmediatamente anterior a la posición final (es decir, la posición inicio esta al final no): */
//Otro ejemplo si se le pasa la posición inicial mayor a la final, se asume que es la posición del comienzo y la mayor donde termina
subcadena1=cadena1.substring(10,6);
console.log(subcadena1);

/**convertir una cadena a un array con la función split, se debe indicar el caracter separador*/
let cadena3="los alumnos son 15 y son muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

/**Con split tamnbien puedo extraer todas las letras de una cadena indicando el separador vacio */
let array2Cadena3=cadena3.split("");
console.log(array2Cadena3);

//FUNCIONES UTILES PARA ARRAYS
//Conocer la longitud de un array
let miArray=[1,2,3,4,5,6,7,8,9];
//explicacion en la linea 113
let micopiaArray=miArray;//con una asignación=
console.log(micopiaArray);
let numElementos=miArray.length;
console.log(numElementos);

//Función para unir o concatenar dos arrays
let array3=array2Cadena3.concat(miArray);
console.log(array3);

//Función join que es lo inverso a split en las cadenas, convierte un array en una cadena
let deArrayAcadena=arrayCadena3.join(" ");//si quito el espacio sale todo junto, por eso de pone 
console.log(deArrayAcadena);
let miArrayAcadena=miArray.join("-");
console.log(miArrayAcadena);

//función pop(), elimina el último elemento del array y lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.
let ultimo=miArray.pop();
console.log(ultimo);
console.log(miArray);

//función push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)
miArray.push("Lucia");
console.log(miArray);

//Función shift(), eimina el primer elemento de un array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento
let primero=miArray.shift();
console.log(primero);
console.log(miArray);

//función unshift(), añade un elemento al principio del aray. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elmento a la vez)
let otroValor="Aníbal";
miArray.unshift(otroValor);
console.log(miArray);

//función reverse(), modifica un array colocando sus elementos en inverso a du posición original
miArray.reverse();
console.log(miArray);
//Es normal realizar operaciones con array, si es necesario para el flujo del programa que el array origina se mantenga, debemos realizar una copia del array, porque estos metodos modifican diferente el array.

//FUNCIONES CON NÚMERO

//Función NaN, (del ingles, "Not a Number") JavaScript emplea el valor Nan para indicar un valor numerico no definido (por ejemplo, la división 0/0).
let numero1=10,numero2=5;
let operacion=numero1/numero2;
console.log(numero1/numero2);//NAN

if(isNaN(operacion)){//->true
    console.log("resultado indefinido");
}else{//false
    console.log("El resultado es"+ operacion);
}

//Numeros infinitos
//Infinity, hace referencia a un valor numérico infinito y positivo (también existe el valor -infinity para los infinitos negaivos)  
let numero3=0;
console.log(numero1/numero3);

//si necesitamos limitar los decimales y redondear utilizaremos la función toFixed
let decimales=35982.56789146783;
console.log(decimales.toFixed(3));//lo pone con 3 decimales 
console.log(decimales.toFixed(2));//lo pone con 2 decimales
console.log(decimales.toFixed(4));//lo pone con 4 decimales
console.log(decimales.toFixed());//te lo pone sin decimales 

//Ejercicio: lee un numero decimal y devuelvelo convertido el . en ,
function cambiar(){
    let numero=document.getElementById("numero").value;
        console.log(numero);
    let elementos=numero.split(".");
        console.log(elementos);
        //concatenando
    let cadenaNumero=elementos[0]+","+elementos[1];
        console.log(cadenaNumero);
        //con el metodo join
    let cadenaNumero2=elementos.join(",");
        console.log(cadenaNumero);
        console.log(cadenaNumero2);
    document.getElementById("numeroDev").innerHTML=cadenaNumero;
}