//Script para validar el formulario y darle dinamismo
window.addEventListener("load", function(){
   let formPago=document.querySelectorAll("input[name='fPago']");
   console.log(formPago);
   for (let i=0;i<2;i++){
        formPago[i].addEventListener("change",function(){
            let divformTC=document.querySelector("#formTC");
            divformTC.style.display="block";
            let divform=document.querySelector("#formPP");
            divform.style.display="none";
            let divform2=document.querySelector("#formB");
            divform2.style.display="none";
         })
    }
    for (let i=2;i<3;i++){
        formPago[i].addEventListener("change",function(){
            let divformPP=document.querySelector("#formPP");
            divformPP.style.display="block";
            let divform=document.querySelector("#formTC");
            divform.style.display="none";
            let divform2=document.querySelector("#formB");
            divform2.style.display="none";
         })
    }
    for (let i=3;i<4;i++){
        formPago[i].addEventListener("change",function(){
            let divformB=document.querySelector("#formB");
            divformB.style.display="block";
            let divform=document.querySelector("#formTC");
            divform.style.display="none";
            let divform2=document.querySelector("#formPP");
            divform2.style.display="none";
         })
    }
    let miInput=Array.from(this.document.querySelector("#form"));
    miInput[0].addEventListener("input",()=>{
        //vamos a quitar el mensaje mientras escribe
        miInput[0].setCustomValidity("");
        miInput[0].checkValidity();
    });
    //mostrar el mensaje de validación
    miInput[0].addEventListener('invalid', ()=>{
        miInput[0].style.background="#ffcdd2";
        miInput[0].checkValidity();
    })
    /*miInput[2].addEventListener("input", ()=>{
        let hoy=new Date;
        let fVisita=new Date(miInput[2].value);
        console.log(fVisita);
    });*/
})
