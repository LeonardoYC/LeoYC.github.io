var animal=[];
var animal[0]="WOLF";
var animal[1]="HORSE";
var animal[2]="ANTELOPE";

$(document).ready(function generarAnimal(){ 

	alert("entrooo..");

var x ;
var y ;

do{
	x= Math.floor((Math.random()*3)+0);
    y = Math.floor((Math.random()*3)+0);
}while(x==y);

var nombre=generarNombre(x,y);

document.getElementById("nombre").innerHTML=nombre;

});


$(document).ready(function generarNombre(x,y){ 
	var nombreI= animal[x];
	var nombreD= animal[y];

	var nombrecortado1;
	var nombrecortado2;

	var tamRecorte1 = Math.floor(nombreI.length/2);
	nombrecortado1= nombreI.slice(0, tamRecorte1);

	var tamRecorte2= Math.floor(nombreD.length/2);
	nombrecortado2=nombreD.slice(tamRecorte2,(nombreD.length));
	return tamRecorte1+tamRecorte2;
}