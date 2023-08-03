window.addEventListener("load",function(){
    let d=new Date();
    document.querySelector("#fecha").innerHTML=d.getDate() +"-"+(d.getMonth()+1)+"-"+d.getFullYear();
    document.querySelector("#hora").innerHTML=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();

    let fNacimiento=new Date(2001,6,19,11,25,10);
    this.document.querySelector("#fNaci").innerHTML=fNacimiento;
    this.document.querySelector("#fCorta").innerHTML=fNacimiento.toLocaleDateString("es-es")+" "+fNacimiento.getHours();
    /**Existe en la programación dos palabras que representan la acción que hara el método
     * -get-> recupera o mustra el valor
     * -set-> asigna el valor
     * El get no espera un valor mientras q el set si, ya que le hace falta.
    */
    fNacimiento.setHours(10);fNacimiento.setFullYear(2003);fNacimiento.setDate(1);fNacimiento.setMonth(11);
    this.document.querySelector("#fCorta2").innerHTML=fNacimiento.toLocaleDateString("es-es")+" "+fNacimiento.getHours();

    //operaciones con fechas
    let beaM=new Date(1998,7,3);
    let beaL=new Date(1992,5,8);

    if(beaL>beaM){
        console.log("La mayor es Bea Mena");
    }else{
        console.log("la Mayor es Bea Lopez");
    }
    console.log(beaL.getFullYear()+67);
    //primero calcular edad actual.
    //edad de jubilación 67
    let hoy=new Date();
    let edadActualBeaL=hoy.getFullYear()-beaL.getFullYear();
    console.log(edadActualBeaL);
    // segundo calcular cuantos años le falta para jubilarse.
    let edadJubBeaL=67-edadActualBeaL;
    console.log(edadJubBeaL);
    let fechaJub=hoy.getFullYear()+edadJubBeaL;
    console.log(fechaJub);

    //Edad jubilacion beaM
    let hoy2=new Date();
    let edadActualBeaM=hoy2.getFullYear()-beaM.getFullYear();
    console.log(edadActualBeaM);
    let edadJubBeaM=67-edadActualBeaM;
    console.log(edadJubBeaM);
    let fechaJubM=hoy2.getFullYear()+edadJubBeaM;
    console.log(fechaJubM);

    let botton=this.document.querySelector("#boton");
    boton.addEventListener("click",function(){
        //let fechaInp=document.querySelector("#fechaInp").value;
        //console.log(fechaInp);
        //console.log(typeof(fechaInp));
        //let fechaForm=new Date(fechaInp);
        let fechaInp=new Date(document.querySelector("#fechaInp").value); //ojo-> aqui solo se utiliza una sola variable
        console.log(fechaInp.toLocaleDateString());
    })
})
