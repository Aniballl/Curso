function enviar(){
    let form=documetn.getElementById("form")
    if(form==""){
    let msnError="Introducca correctamente los datos";
    document.getElementById("msnError").innerHTML=msnError;
        
    }else{
     let resultado="Gracias por sus datos"
    document.getElementById("resultado").innerHTML=resultado;
 }
}

