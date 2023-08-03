window.addEventListener("load",function(){
    console.log(document);

    let elementsImg=[...this.document.getElementsByTagName("img")];
    console.log(elementsImg);

    let img1=elementsImg[1];
    img1.addEventListener("mouseover",()=>{
        img1.style.opacity="0.1"
    })
    img1.addEventListener("mouseout",()=>{
        img1.style.opacity="1"
    })
    let img2=elementsImg[2];
    img2.addEventListener("mouseover",()=>{
        img2.style.opacity="0.1"
    })
    img2.addEventListener("mouseout",()=>{
        img2.style.opacity="1"
    })
})