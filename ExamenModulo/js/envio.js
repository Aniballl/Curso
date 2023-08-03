window.addEventListener("load",()=>{
    let seleccion=document.querySelector("#boton");
    let divImg=document.querySelector("#imagen");
    seleccion.addEventListener("click",()=>{
        divImg.style.display="block";
        seleccion.style.display="none"; 
    })
})


