/**
 * Lagunas o errores comunes....
 * 
 * 0->Antes de hacer la primra linea de codigo analiza, piensa, escribe lo que tienes que hacer de forma jerarquica...
 * primero una cosa luego otr y asi 
 * y lo ultimo cuando todo funcione crea los estilos, 
 * NO PIERDAS TIEMPO CON EL CSS.....
 * 
 * 1->No me lee.....
 * Para eso esta el console.log..->Lo primero es leerlo  comprobar que lo estas leyendo..
 * 
 * 2->No hace nada..
 * Utiliza el F12 del navegador
 * 
 * 3->
 * 
 * Exxamen de la Semana q viene
 * ---Es una empresa de Envios---
 * tipo de envio, carta mas de xkg
 * y otra cajetilla del sitio, local, nacional....
 * dos cajetillas, segun ellas tengo que calcular, para que de el precio final del envio.
 * Sumar la primera cajetilla del tipo de envio, y la segunda con el sitio, y see calcula. 
 * select.value de la opcion. 
 * 
 * Es Inportante ir asegurnadose de que funcione en cada paso, ya sea por console.log o por alertas
*/
// se saca fuera para q sean variebles globales, lo que hace que pueda ser leida por toda la función 
let mensajeError=document.querySelector("#mensaje")
let msn=""; //las cadenas de mensaje de errores, se acumulan

window.addEventListener("load",()=>{
    //Crear efecto sobre las imagenes 
    let imagenes=document.querySelectorAll(".imagen");
    imagenes.forEach(img=>{
        img.addEventListener("mouseover",()=>{
            img.style.width="35%";
            img.style.transform="rotate(0.5turn)"
        })
        img.addEventListener("mouseout",()=>{
            img.style.width="auto";
            img.style.transform="rotate(1turn)"
        })
    })
    console.log(imagenes);
    /************************************** */
    let seleccion=document.querySelector("#formCto");
    //delclaraos los div ocultos
    let divTel=document.querySelector(".telOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".correoOculto");

    seleccion.addEventListener("change",()=>{
        let valorSeleccion=seleccion.value;
        switch (valorSeleccion){
            case "telefono":{
                divTel.style.display="block";
                divCorreo.style.display="none";
                divEmail.style.display="none";
                break;
            }
            case "email":{
                divEmail.style.display="block";
                divCorreo.style.display="none";
                divTel.style.display="none";
                break;
            }
            case "correo":{
                divCorreo.style.display="block";
                divTel.style.display="none";
                divEmail.style.display="none";
                break;
            }
            default:{
                alert("no seleciono nada")
            }
        }
    })

    // Leer el resto del formulario
    let boton=document.querySelector("#boton");
    //Cuando le des al boton va a desencadenar los datos, en la consola
    boton.addEventListener("click",()=>{
        // declaramos cada uno de los input a leer
        let nombre=document.querySelector("#fname");
        let apellidos=document.querySelector("#lname");
        let mensaje=document.querySelector("#subject");
        // verificar...
        console.log(nombre+" "+apellidos+" "+mensaje);
        validarNombre(nombre);
        validarApellidos(apellidos);
        //leemos los valores del select
        let telefono=document.querySelector("#telefono");
        let email=document.querySelector("#email");
        let direccion=document.querySelector("#direccion");
        // lo pasamos a validar
        validarForCto(telefono,email,direccion);

        let inputs=document.querySelectorAll(".entrada");
        inputs.forEach(items=>{
            items.addEventListener("focus",()=>{
                items.style.background="#fff";
                items.style.borderColor="#000";
            });
        });
    });
});

function validarNombre(nombre){
    if(nombre.value==null||nombre.value==""||nombre.value==" "){
        msn="Indique un Nombre valido";
        nombre.style.borderColor="red";
        nombre.style.background="pink";
        nombre.setAttribute("placeholder", "Escribe bien tu nombre");
    }
}
function validarApellidos(apellidos){
    if(apellidos.value==null||apellidos.value==""||apellidos.value==" "){
        msn="Indique un Apellido valido";
        apellidos.style.borderColor="red";
        apellidos.style.background="pink";
        apellidos.setAttribute("placeholder", "Escribe bien tus apellidos");
    }
}
function validarForCto(telefono,email,direccion){
    let seleccion=document.querySelector("#formCto");//se vuelve ha nombrar ya que el de antes iba dirigido a los div ocultos y este a lo que esta dentro de los div 
    if(telefono.value==""||email.value==""||direccion.value==""){
        
        seleccion.style.borderColor="red";
        seleccion.style.background="pink";
    }else{
        seleccion.style.borderColor="black";
        seleccion.style.background="white";
    }
}