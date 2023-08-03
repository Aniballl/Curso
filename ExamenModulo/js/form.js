window.addEventListener("load",()=>{
   let boton=document.querySelector("#boton");
//Cuando le des al boton va a desencadenar los datos, en la consola
boton.addEventListener("click",()=>{
    // declaramos cada uno de los input a leer
    let nombre=document.querySelector("#fname");
    let apellidos=document.querySelector("#lname");
    let mensaje=document.querySelector("#subject");
    console.log(nombre+" "+apellidos+" "+mensaje);
    validarNombre(nombre);
    validarTelefono(telefono);
    validarEmail(email);
    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
        items.addEventListener("focus",()=>{
            items.style.background="#fff";
            items.style.borderColor="#000";
        });
    });
}); 
})

function validarNombre(nombre){
if(nombre.value==null||nombre.value==""||nombre.value==" "){
    msn="Indique un Nombre valido";
    nombre.style.borderColor="red";
    nombre.style.background="pink";
    nombre.setAttribute("placeholder", "Escribe bien tu nombre");
}
}
function validarTelefono(telefono){
    if(telefono.value==null||telefono.value==""||telefono.value==" "){
        msn="Indique un Nombre valido";
        telefono.style.borderColor="red";
        telefono.style.background="pink";
        telefono.setAttribute("placeholder", "Escribe bien tu nombre");
    }
    }
function validarEmail(email){
if(email.value==null||email.value==""||email.value==" "){
    msn="Indique un Apellido valido";
    email.style.borderColor="red";
    email.style.background="pink";
    email.setAttribute("placeholder", "Escribe bien tus apellidos");
}
}
