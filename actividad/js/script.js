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

let elemento=document.getElementById("condiciones");
for (var i=0; i<elemento;i++){
  alert(" Elemento: " + elemento.value + "\n Seleccionado: " + elemento.checked);
};

var formularioPrincipal = document.getElementById("formulario"); 

window.addEventListener("load",()=>{
    let Swal=addEventListener("click",()=>{
    Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
        autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
        return fetch(`//api.github.com/users/${login}`)
            .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
            })
            .catch(error => {
            Swal.showValidationMessage(
                `Request failed: ${error}`
            )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
        })
        }
        }) 
    })
})
