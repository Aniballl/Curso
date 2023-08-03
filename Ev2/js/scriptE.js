
function calcular(){
        let peso=document.getElementById("peso").value;
        validarDatos(peso);
        if (validarDatos(peso)){
            calcularPrecio(peso);
        }
    }
    function calcularPrecio(peso){
        if(peso<=0.250 && peso>0.350){
            valor=("Nevera");
        }
        if(peso>0.900 && peso<=2000){
            valor=("Vitroceramica");
        }
        if(peso>0.900 && peso<=1500){
            valor=("Microondas");
        }
        if(peso>1200 && peso<=2200){
            valor=("Horno");
        }
        if(peso>1500 && peso<=2200){
            valor=("Lavavajillas");
        }
        if(peso>1500 && peso<=2200){
            valor=("Lavadora");
        }
        if(peso>0.150 && peso<=0.400){
            valor=("Television");
        }
        if(peso>0.900 && peso<=2000){
            valor=("Aire acondicionado");
        }
        if(peso>1000 && peso<=2500){
            valor=("Calefacción");
        }
        if(isNaN(valor)){
            document.getElementById("resultado").innerHTML=valor;
        }else{
          document.getElementById("resultado").innerHTML="Eso gasta tu "+valor;  
        }
}
