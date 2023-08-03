function edad(){
    let nEdad=document.getElementById("edad").value;
    let msnEdad;
    if(nEdad <= 0||nEdad >100 || nEdad== ""){
        let msnError="Indique bien su edad";
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        if(nEdad<12){
            msnEdad="Todavia eres muy pequeño"; 
         }else if(nEdad<19){
            msnEdad="Eres Adolescente";
        }else if(nEdad<35){
            msnEdad="Todavia eres joven"
         }else{
            msnEdad="Cuidate mucho!"
         }
        document.getElementById("resultado").innerHTML=msnEdad;
    }
}