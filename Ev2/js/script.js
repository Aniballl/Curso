alert("Bienvenido a Diser, puede mirar los planes de suscripciones, Gracias");
window.addEventListener("load",function(){
    let d=new Date();
    document.querySelector("#fecha").innerHTML=d.getDate() +"-"+(d.getMonth()+1)+"-"+d.getFullYear();

    let elementsImg=[...this.document.getElementsByTagName("img")];
    console.log(elementsImg);
    let img2=elementsImg[2];
    img2.addEventListener("mouseover",()=>{
        img2.style.width="300px";
        img2.style.height="150px";
    })
    img2.addEventListener("mouseout",()=>{
        img2.style.width="500px";
        img2.style.height="250px";
    })
    let img1=elementsImg[1];
    img1.addEventListener("mouseover",()=>{
        img1.style.width="300px";
        img1.style.height="150px";
    })
    img1.addEventListener("mouseout",()=>{
        img1.style.width="500px";
        img1.style.height="250px";
    })
    let img3=elementsImg[3];
    img3.addEventListener("mouseover",()=>{
        img3.style.width="300px";
        img3.style.height="150px";
    })
    img3.addEventListener("mouseout",()=>{
        img3.style.width="500px";
        img3.style.height="250px";
    })
})