function c()
{
var t1= document.getElementById("t1");
var t2= document.getElementById("t2");

var c1;
var c2;
var c3;

c1=(1*t1.value+t2.value/60)/5;
c2=Math.trunc(c1);
c3=Math.trunc((c1-c2)*60);

resultadoc1.innerHTML =c2;
resultadoc2.innerHTML =c3+" min/km";

}

var resultadoc1 = document.getElementById("resultadoc1");
var resultadoc2 = document.getElementById("resultadoc2");
var b1 = document.getElementById("extraer1");
b1.addEventListener("click", c);





