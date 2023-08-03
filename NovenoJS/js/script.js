/**Las funciones anonimas son comunes en javascript, donde se nombra la función()pero no tienen nombre, pero se le puede asignar una variable, si se invoca a traves de esta. */
let hola=function(){//Es con variable
    alert("Hola Mundo")
}
//otros ejemplos
const cuadrado=function(numero){//es una costante
    return numero*numero;
}
console.log(cuadrado(5));
