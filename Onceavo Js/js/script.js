window.addEventListener("load",()=>{
    const y =document.querySelector("h2"); //sustituye getElementByTagName
    const x = document.querySelectorAll("#intro");//sustituye getElementById
    const z = document.querySelectorAll(".intro");//sustituye getElementByClassName
    /*querySelector retorna el primero que encuentra
    querySelectorAll retorna un Array con todos los elmentos que encuentra
    */
    document.getElementById("demo1").innerHTML = 
    'El primer objeto tiene la etiqueta h2: ' + y.innerHTML;
    document.getElementById("demo2").innerHTML = 
    'El primer objeto que tiene el id intro: ' + x[0].innerHTML;
    document.getElementById("demo3").innerHTML = 
    'El segundo objeto que tiene la class intro: ' + z[1].innerHTML;
    //leemos el boton 
    const boton=document.querySelectorAll(".boton")
    //si ocurre el evento de click en el boton 0 sustituyo la bombilla por la imagen apagada
    boton[0].addEventListener("click",()=>{
        const bombilla=document.querySelector("#bombilla");
        bombilla.src="img/on.gif";
    })
    //si ocurre el evento de click en el boton 0 sustituyo la bombilla por la imagen apagada
    boton[1].addEventListener("click",()=>{
        const bombilla=document.querySelector("#bombilla");
        bombilla.src="img/off.gif";
        
    })
});
