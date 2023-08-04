function cuadro(elEvento, maximoCaracteres) {
let elemento = document.getElementById("texto");
    let evento = elEvento || window.event;
    let codigoCaracter = evento.charCode || evento.keyCode;
    if(codigoCaracter == 37 || codigoCaracter == 39) {
      return true;
    }
    if(codigoCaracter == 8 || codigoCaracter == 46) {
      return true;
    }
    else if(elemento.value.length >= maximoCaracteres ) {
      return false;
    }
    else {
      return true;
}
}
  
function actualizaInfo(maximoCaracteres) {
  var elemento = document.getElementById("texto");
  var info = document.getElementById("info");
  
  if(elemento.value.length >= maximoCaracteres ) {
      info.innerHTML = "Máximo "+ maximoCaracteres +" caracteres";
  }
  else {
    info.innerHTML = "Puedes escribir hasta "+(maximoCaracteres-elemento.value.length)+" caracteres adicionales";
  }
}
window.addEventListener("load",()=>{
  let elemento=document.getElementById("condiciones");
  elemento.addEventListener("click",()=>{
    alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
  })
}); 

function alerta() {
  Swal.fire({
    title: "Lo consegui!",
    text: "diste a mi boton!",
    icon: "success",
    button: "Aww yiss!",
  });
}