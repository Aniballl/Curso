window.addEventListener("load",()=>{
let imagenes=document.querySelectorAll(".imagenes");
imagenes.forEach(img=>{
    img.addEventListener("mouseover",()=>{
        img.style.width="35%";

    })
    img.addEventListener("mouseout",()=>{
        img.style.width="500px";
    })
})
console.log(imagenes);
})