/**Bucles While
 * while(condicion){
 * se repite mientras esta condicion sea true}
 * bloque de codigo
 * 
 * Ejmplo: mostrar en consola los nuemeros del 1-15.
 * cuando se trabaja con numero o otro elemento tenemos q evaluar o buscar la manera que salga del bucle sino se quedaria en bucle infinito.
 */
function primerWhile(){
    let num=0;
    while (num<=15){
        console.log(num);
        //si no se incrementa el valor de num el bucle nunca acabara
        num++;
    }
}
function arrayWhile(){
    let interruptor=false;
    while(!interruptor){
        console.log(interruptor);
        let a="Lucia";b="Aníbal";
         //si no camnio el valor de interruptor a true nunca terminara
        if(a!=b){
            interruptor=true;
            console.log(interruptor);
        }
    }
}
function cadenasWhile(){
    //Declaramos una cosntante tipo array de marcaCoches
    const cars=["BMW","Mercedes","Saab","Auidi"];
    //indique que nos va a permitir salir de bucle
    let i=0;
    //texto que mostrará con todos los valores segun vaya recorriendo el bucle
    let text="";//inicializa la variable en blanco o vacia
    while(cars [i]){
        text+=cars[i]+" ";
        console.log(text);
        i++
    }
    let text2="";
    while(text2==""){
        text2=prompt("Escribe un nombre")
        console.log(text2);
    }
    console.log("Salio del bucle");
}
//Ejercicio: Lee un número hasta que sea par, sino sigue leyendo!
function numeroParWhile(){
    let num;
    while(num %2!=0){
        nun=parseInt.apply(prompt("Escribe un numero"));
    }
    alert("Por fin has escrito un número par");
}
/**bucle do while: hacer mientras..
 * Es igual al while con la diferencia que siempre se ejecuta al menos una vez
 * do(//Bloque de instruciones.....)while(condicion);
 * Ejemplo: Pedimos al usuario que escriba el nombre Maria y mientras no lo haga lo vuelva a pedir 
 */
function nombreDoWhile(){
    let nombre="Maria";
    do{
        nombre=prompt("Adivina el nombre");
    }
    while(nombre!="Maria");
    alert("has acertado");
}
function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text +=" The number is "+i;
        i++
        console.log(text);
    }
    while(i < text);//falso
    console.log("salio del bucle");
}
//Contraseña de las paginas web=  d4tw=C34t