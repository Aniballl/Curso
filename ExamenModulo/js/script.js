function calcular() {
    let lugar=parseInt(document.getElementById("lugar").value); 
    let peso=parseInt(document.getElementById("peso").value);
    console.log(lugar);
    console.log(peso);
    if (validarDatos(lugar)&& validarDatos2(peso)) {
        calcularPeso(lugar,peso);
    } 
}
function validarDatos(lugar) {
    if (isNaN(lugar)) {
        document.getElementById("resultado").innerHTML="Seleccione una de la opciones."
    }else{
        return true;
    }
    console.log(lugar);
}
function validarDatos2(peso) {
    if (isNaN(peso)) {
        document.getElementById("resultado").innerHTML="Selecione una de las opciones."
    } else{
        return true;
    }
}
let valor;
function calcularPeso(lugar,peso) {
    valor=lugar + peso;
    document.getElementById("resultado").innerHTML="El precio es " + valor.toFixed(2)+ "€";
    console.log(valor);
}
