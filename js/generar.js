
    var animales= [];
    animales[0] = "HORSE"
    animales[1] = "WOLF"
    animales[2] = "ANTELOPE"
    animales[3] =  "DOG" 
    animales[4] =  "LION" 
    animales[5] =  "KANGAROO" 
    animales[6] =  "PIG" 

    var animalesURLI= [];
    animalesURLI[0] = "IMG/Animales/Izquierda/HORSE.png"
    animalesURLI[1] = "IMG/Animales/Izquierda/WOLF.png"
    animalesURLI[2] = "IMG/Animales/Izquierda/ANTELOPE.png"
    animalesURLI[3] = "IMG/Animales/Izquierda/DOG.png"
    animalesURLI[4] = "IMG/Animales/Izquierda/LION.png"
    animalesURLI[5] = "IMG/Animales/Izquierda/KANGAROO.png"
    animalesURLI[6] = "IMG/Animales/Izquierda/PIG.png"

    var animalesURLD= [];
    animalesURLD[0] = "IMG/Animales/Derecha/HORSE.png"
    animalesURLD[1] = "IMG/Animales/Derecha/WOLF.png"
    animalesURLD[2] =  "IMG/Animales/Derecha/ANTELOPE.png"
    animalesURLD[3] = "IMG/Animales/Derecha/DOG.png"
    animalesURLD[4] = "IMG/Animales/Derecha/LION.png"
    animalesURLD[5] = "IMG/Animales/Derecha/KANGAROO.png"
    animalesURLD[6] = "IMG/Animales/Derecha/PIG.png"
function generar(){

    var ladoI;
    var ladoD;
    do{
     ladoI = Math.floor((Math.random() * 6) + 0);
     ladoD = Math.floor((Math.random() * 6) + 0);
    }while(ladoI== ladoD);
    

    var nombre = generarNombre(ladoI, ladoD);

     document.getElementById('izquierda').src = animalesURLI[ladoI];
    document.getElementById('derecha').src = animalesURLD[ladoD];

    
    document.getElementById("nombre").innerHTML = nombre;
}

function generarNombre(ladoI, ladoD) {

   var nombreI = animales[ladoI];
   var nombreD = animales[ladoD];

   var  resultado1;
   var  resultado2;

   
   var tamRecortar = Math.floor((nombreI.length/2));
   resultado1 = nombreI.slice(0, tamRecortar);

   var tamRecortar2 = Math.floor((nombreD.length/2));
   resultado2 = nombreD.slice(tamRecortar2,(nombreD.length));


  return resultado1 + resultado2;
}

