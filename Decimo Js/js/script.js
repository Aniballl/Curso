/**Cuando la ventan o el documento sea leído, o ha cargado, 
 * indicamos un eveno en la pagina.
 * objeto.addEventListener("acción", Funcion);
 * la función en esta estructura no lleva ()
 * window.addEventListener("load", function);*/
window.addEventListener("load",function(){
    //contenido de la funcion al leer el documento
    console.log(document);
    //acceder a cada uno de los elemenos
    const card2=this.document.getElementById("card-2");
    console.log(card2); 
    const elements= this.document.getElementsByTagName("p");
    console.log(elements);

    //convertir un htmlCollection en array para manipular Existen dos maneras: 1. let elements=[...document.getElementaryByTagName("p")]; 2. let elements=array.from(document.getElementsByTagName ("p"));

    let elementsDiv=[...this.document.getElementsByTagName("div")];
    console.log(elementsDiv);
    let elementsH1=[...this.document.getElementsByTagName("h1")];
    console.log(elementsH1)

    let elementsParrafo=Array.from(this.document.getElementsByTagName("p"));
    console.log(elementsParrafo);
    let primerP=elementsParrafo[0];
    primerP.style.background="lightgrey";
    primerP.style.fontFamily="Cambria";
    /**acceder a los elementos siguiendo un evento */
    primerP.addEventListener("click",function(){
        primerP.style.background="white";
    })
    let segundoP=elementsParrafo[1];
    //Una función anonima, es decir funcion() se puede tabién utilizar de la siguiente manera-> ()=>{..instrucciones}
    segundoP.addEventListener("click",()=>{
        //Vamos a llamar la funcion ramdon y sustituir el valor dentro de variable colorFondo
        let colorRed=ramdon(255);
        let colorGreen=ramdon(255);
        let colorBlue=ramdon(255);
        let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
        console.log(colorFondo);
        this.document.body.style.backgroundColor=colorFondo;
    });

    /**Cambiar color del titulo de la caja 3 si pulsa click sobre el titulo */
    let encabezados=Array.from(this.document.getElementsByClassName("titulo"));
    console.log(encabezados);
    let tercerT=encabezados[2];
    tercerT.addEventListener("click",()=>{
        let colorRed=ramdon(255);
        let colorGreen=ramdon(255);
        let colorBlue=ramdon(255);
        let colorTitulo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
        console.log(colorTitulo);
        tercerT.style.color=colorTitulo;  
    })
    
    //Cambiar el color de todos los encabezados
    let titulo4=encabezados[3];
    titulo4.addEventListener("click",()=>{
        encabezados.forEach(cambiarColor);//forEach dice que tiene un item y un index y todo se ve en la consola, al igual que un Array, pero sin decir por donde va el recorrido
    });
    //cambiar la letra a cursiva de los parrafos cuando pulses click en el tercer parrafo
    let parrafo3=elementsParrafo[2];
    parrafo3.addEventListener("click",()=>{
        elementsParrafo.forEach(cambiarLetra);
    });

    //Desaparecer algo al pasar por encima 
    let div5=elementsDiv[5];
    div5.addEventListener("mouseover",()=>{
        div5.style.opacity="0.1";
    });
    div5.addEventListener("mouseout",()=>{
        div5.style.opacity="1";
    });
    //imagen
    let div6=elementsDiv[6];
    div6.addEventListener("mouseover",()=>{
        div6.style.opacity="0.1"
    })
    div6.addEventListener("mouseout",()=>{
        div6.style.opacity="1"
    })
})
function cambiarLetra(item,index){
    console.log(item);
    console.log(index);
    item.style.fontFamily="italic";
}
function cambiarColor(item,index){
        console.log(item);
        console.log(index);
        item.style.color="red";
    }
function ramdon(numero){
    let result=Math.floor(Math.random()*(numero+1));
    return result;
}
