window.addEventListener("load",()=>{
    let seleccion=document.querySelector("#formC");
    console.log(seleccion);

    let mes2=document.querySelector(".mesOculto2");
    console.log(mes2);
    let mes4=document.querySelector(".mesOculto4");
    let mes11=document.querySelector(".mesOculto11");
    let mes12=document.querySelector(".mesOculto12");
    let mes15=document.querySelector(".mesOculto15");
    let ano4=document.querySelector(".anoOculto4");
    let ano6=document.querySelector(".anoOculto6");
    let ano12=document.querySelector(".anoOculto12");
    let ano14=document.querySelector(".anoOculto14");

    seleccion.addEventListener("change",()=>{
        console.log(seleccion.value);
        let valorSeleccion=seleccion.value;
        switch (valorSeleccion){
            case "nada":{
                mes4.style.display="none";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "meses2":{
                mes2.style.display="block";
                mes4.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "meses4":{
                mes4.style.display="block";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "meses11":{
                mes11.style.display="block";
                mes2.style.display="none";
                mes4.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "meses12":{
                mes12.style.display="block";
                mes2.style.display="none";
                mes11.style.display="none";
                mes4.style.display="none";
                mes15.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "meses15":{
                mes15.style.display="block";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes4.style.display="none";
                ano4.style.display="none";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "anos4":{
                mes4.style.display="none";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano4.style.display="block";
                ano6.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "anos6":{
                mes4.style.display="none";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano6.style.display="block";
                ano4.style.display="none";
                ano12.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "anos12":{
                mes4.style.display="none";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano12.style.display="block";
                ano6.style.display="none";
                ano4.style.display="none";
                ano14.style.display="none";
                break;
            }
            case "anos14":{
                mes4.style.display="none";
                mes2.style.display="none";
                mes11.style.display="none";
                mes12.style.display="none";
                mes15.style.display="none";
                ano14.style.display="block";
                ano6.style.display="none";
                ano12.style.display="none";
                ano4.style.display="none";
                break;
            }
        }
    })
    let boton=document.getElementById("aumentar");
    boton.addEventListener("click",()=>{
        boton.style.fontSize="large";
        boton.style.fontFamily="Arial";
    })
    
})