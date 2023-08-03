window.addEventListener("load",(e)=>{
    event.preventDefault();//No enviar el formulario
    let mensaje=document.querySelector("#mensaje");
    let msn="";
    let boton=document.querySelector(".boton");
    boton.addEventListener("click",()=>{
        let nombre=document.querySelector("#nombre").value;
        console.log(nombre);
        if(nombre==""||nombre==null){
          msn="Escriba su nombre en la casilla correspondiente"  
        }
        let  pass=document.querySelector("#pass").value;
        console.log(pass);
        if(pass.length<8 ||pass.length>12){
            msn=msn+"<br> La contraseña necesita minimo 8 digitos y menor que 12"
        }
        mensaje.innerHTML=msn;
        let inputs=document.querySelectorAll(".entrada");
        inputs.forEach(items=>{
        items.addEventListener("focus",()=>{
        mensaje.innerHTML=" ";
        msn="";
        })
        })
    })
})