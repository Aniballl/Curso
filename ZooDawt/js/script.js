/**window.addEventListener("load",()=>{
  plusSlides(n)
  currentSlide(n)
  showSlides(n)
})
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display="block";  
  dots[slideIndex-1].className += "active";
}**/

let arrayImg=new Array(4);//declarando que este array va a tener 4 elementos.
arrayImg[0]=new Image();
arrayImg[0].src="img/fotaza-leones.webp"
arrayImg[1]=new Image();
arrayImg[1].src="img/elefante2.webp"
arrayImg[2]=new Image();
arrayImg[2].src="img/leopardo.webp"
arrayImg[3]=new Image();
arrayImg[3].src="img/oso-pardo.webp"

//DELCARAMOS UN CONTADOR QUE LLEVA LA CUENTA DE LAS IMAGENES QUE VA MOSTRANDO Y COMIENZA EN 1 Y TERMINA EN 4

let contador=0;
function cambiarImagen(){
  document.querySelector("#banner").src=arrayImg[contador].src;
  console.log(contador);
  contador++;//4
  //operador ternario
  if (contador==4) {
    contador=0
  }
  // se puede hacer de las dos maneras con if o con el ternario
  // contador==4?contador=0:contador;//hace falta el signo de interrogación para que sea numero
  setTimeout("cambiarImagen()", 5000);//se llama a si mismo y se vuelve a cargar la funcion cada ese tiempo, en segundos
}
function validarFormulario(){
  //instrucciones de validar
  alert("validando...");
}
window.addEventListener("load",()=>{
  //las funciones que voy a llamar cuando la pagina cargue
  let boton1=document.querySelector("#boton1");
  boton1.addEventListener("click",validarFormulario);
  cambiarImagen()
})