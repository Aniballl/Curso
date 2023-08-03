let arrayImg=new Array(4) //declaramos que este array va a tener 4 elementos
arrayImg[0]=new Image();
arrayImg[0].src="img/rosi1.jpg";
arrayImg[1]=new Image();
arrayImg[1].src="img/rosi2.jpg";
arrayImg[2]=new Image();
arrayImg[2].src="img/rosi3.jpg";
arrayImg[3]=new Image();
arrayImg[3].src="img/rosi4.jpg"
arrayImg[4]=new Image();
arrayImg[4].src="img/rosi5.jpg"

//declaramos un contador que lleve la cuenta de la imagen que se va mostrando, el cual comienza en 1 y terminaá en 4 y de nuevo, volverá al 1 y así

let contador=0;

function cambiarImg(){
  document.querySelector("#banner").src=arrayImg[contador].src;
  contador++;
  //operador ternario
  contador=contador==5?contador=0:contador=contador;
  setTimeout("cambiarImg()", 5000); //se llama a si mismo y así, vuelve a realizar la función
}


function validarForm(){
  alert("Validando...");
}

window.addEventListener("load",()=>{
  let boton=document.querySelector("#boton");
  boton.addEventListener("click", validarForm);
  cambiarImg();
});

window.addEventListener("load", ()=>{


//CREAR EFECTO DE AGRANDAR LAS IMAGENES CUANDO SE PASA EL RATON
let imagenes=document.querySelectorAll(".proyecto");
  imagenes.forEach(items=>{
   items.addEventListener("mouseover", ()=>{  
    items.style.width="100%";
  });
  items.addEventListener("mouseout",()=>{
    items.style.width="90%";
  })

})
})











function sumar(){
  let a=5, b=3;
  let suma=a+b;
  return suma;
}
console.log(sumar());

function sumar2(){
  let suma=a+b;
  return suma;
}
let a=12, b=15;
console.log(sumar2());

//FUNCIÓN CON ARGUMENTOS O VALORES QUE RECIBE
function multiplicar(primerN,segundoN) {
  return primerN*segundoN;
}
//para que se ejecute, debemos psar los argumentos que necesita para realizar la operación:
console.log(multiplicar(25,3));
console.log(multiplicar(3,21));
console.log(multiplicar);

function dividir(primerN,segundoN){
  return segundoN/primerN;
}
console.log(dividir(5,0));




/*EJERCICIO DE EXAMEN, GASTOS DE ENVÍO MÁS IVA
*/

//primero, declaramos el iva como una constante y global
const iva2=1.21;
let valor

/*1º funcion es llamada desde html y enviada
    a.validar el dato introducido (2º funcion)
    a.1. si el dato es incorrecto, envia mensaje de error
    a.2. si es correcto, envia el dato a la 3º1 funcion calcularprecio, que mostrata el resultado del calculo*/
    
function calcular(){
    let peso=document.getElementById("peso").value;
    let kilometros=document.getElementById("kilometros").value;
    console.log("kilometros: " + kilometros);
    console.log("peso: " + peso);
    if(validarDatos(peso) && validarDatosk(kilometros)){
    calcularPeso(peso, kilometros)
    }
}
function validarDatos(peso){
    if(isNaN(peso)){
        document.getElementById("resultado").innerHTML="Por favor, escriba el peso en números";
        return false;
    }else{
        return true;
    }
}

function validarDatosk(kilometros){
  if(isNaN(kilometros)){
      document.getElementById("resultado").innerHTML="Por favor, seleccione una opción";
  }else{
      return true;
  }
}




function calcularPeso(peso, kilometros){
    if (peso<=1){
        valor=(11.82*iva2).toFixed(2);
    }

    if(peso>1 && peso<=5){
        valor=(14.59*iva2);
    }

    if(peso>5 && peso<=10){
        valor=(19.09*iva2);
    }

    if(peso>10 && peso<=15){
        valor=(22.73*iva2);
    }

    if(peso>15 && peso<=20){
        valor=(27.69*iva2);
    }

    if(peso>20 && peso<=25){
        valor=(32.77*iva2);
    }

    if(peso>25 && peso<=30){
        valor=(37.73*iva2);
    }

    valor= valor * kilometros;
    if(peso>30){
    document.getElementById("resultado").innerHTML="Debe consultar con la oficina";
    }else{
 document.getElementById("resultado").innerHTML="El precio final es " + valor.toFixed(2)+ "€";//to fixed 2 es para coger dos decimales
}
}





































//FOMULARIO SCRIPT


//variables globales, es decir, que pueden ser leídas por todas las funciones
let mensajeError=document.querySelector("#mensaje");
let msn=""; //las cadenas de mensajes de errores

window.addEventListener("load", ()=>{
let seleccion=document.querySelector("#formCto");

//declaramos los div ocultos
let divTel=document.querySelector(".telOculto");
let divEmail=document.querySelector(".emailOculto");
let divCorreo=document.querySelector(".correOculto");
seleccion.addEventListener("change", ()=>{
    let valorSeleccion=seleccion.value;
    switch(valorSeleccion){
        case "telefono":{ //se pone lo mismo que ponga en la etiqueta value del html
            divTel.style.display="block";
            divCorreo.style.display="none";
            divEmail.style.display="none";
            break;
        }
        case "email":{
            divEmail.style.display="block";
            divTel.style.display="none";
            divCorreo.style.display="none";
            break;

        }
        case "correoPostal":{
            divCorreo.style.display="block";
            divEmail.style.display="none";
            divTel.style.display="none";
            break;
        }
        default:{
            divCorreo.style.display="none";
            divEmail.style.display="none";
            divTel.style.display="none";
        }
    }

})


//LEER EL RESTO DEL FORMULARIO
let boton=document.querySelector("#boton"); //si pulsa el boton, realiza lo de abajo
boton.addEventListener("click", ()=>{


let nombre=document.querySelector("#nombre");
let apellido=document.querySelector("#apellido");
let mensaje=document.querySelector("#mensaje");

/* PARA VERIFICAR QUE LO LEE: 
console.log(nombre + " " + apellido + " " + mensaje);  */

validarNombre(nombre);
validarApellido(apellido);

//leemos los valores del select
let telefono=document.querySelector("#telefono");
let email=document.querySelector("#email");
let direccion=document.querySelector("#direccion");

validarFormCto(telefono, email, direccion);

//para quitar el rojo de erros cuando pulsamos click en la cajetilla
let inputs=document.querySelectorAll(".entrada");
inputs.forEach(items=>{
    items.addEventListener("focus", ()=>{
        items.style.background="#fff";
        items.style.borderColor="#000";
    })
})


})
})

function validarNombre(nombre){
if(nombre.value==null || nombre.value=="" || nombre.value==" "){
    msn="Indique un nombre válido"
    nombre.style.background="pink";
    nombre.style.borderColor="red";
    nombre.setAttribute("placeholder", "Escribe un nombre correctamente")
}
}
function validarApellido(apellido){
if(apellido.value==null || apellido.value=="" || apellido.value==" "){
    apellido.style.color="red";
    apellido.style.background="pink";
    apellido.style.borderColor="red";
    apellido.setAttribute("placeholder", "Escribe un apellido correctamente")
}
}
function validarFormCto(telefono, email, direccion){
if(telefono.value=="" || email.value=="" || direccion.value==""){
    let seleccion=document.querySelector("#formCto");
    seleccion.style.background="pink";
    seleccion.style.borderColor="red";
    seleccion.setAttribute("placeholder", "Escribe un mensaje coherente")
}
}