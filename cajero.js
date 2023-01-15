function c()
{
var t1= document.getElementById("t1");
var t2= document.getElementById("t2");

var c1;
var c2;
var c3;


var c7;
var c8;
var c9;
var c10;
var c11;
var c12;

c1=(1*t1.value+t2.value/60)/5;
c2=Math.trunc(c1);
c3=Math.trunc((c1-c2)*60);

c7=Math.trunc(c1/2.5);
c8=Math.trunc((c1/2.5-c7)*60);

c9=Math.trunc((c1*0.2)*60);

c10=Math.trunc((c1/10)*60);

c11=Math.trunc(c1*0.8);
c12=Math.trunc((c1*0.8-c11)*60);


resultadoc1.innerHTML =c2;
resultadoc2.innerHTML =c3+" min/km";
resultadoc8.innerHTML ="2 vueltas 800m en "+c11+"min:"+c12+"seg";
resultadoc5.innerHTML ="1 vuelta 400m en "+c7+"min:"+c8+"seg";
resultadoc6.innerHTML ="1/2 vuelta 200m en "+c9+"seg";
resultadoc7.innerHTML ="1/4 vuelta 100m en "+c10+"seg";
}

var resultadoc1 = document.getElementById("resultadoc1");
var resultadoc2 = document.getElementById("resultadoc2");
var resultadoc5 = document.getElementById("resultadoc5");
var resultadoc6 = document.getElementById("resultadoc6");
var resultadoc7 = document.getElementById("resultadoc7");
var resultadoc8 = document.getElementById("resultadoc8");
var b1 = document.getElementById("extraer1");
b1.addEventListener("click", c);


function c1()
{
var t3= document.getElementById("t3");
var t4= document.getElementById("t4");

var c4;
var c5;
var c6;

var c13;
var c14;
var c15;
var c16;
var c17;
var c18;
var c18;

c4=(1*t3.value+t4.value/60)/10;
c5=Math.trunc(c4);
c6=Math.trunc((c4-c5)*60);



c13=Math.trunc(c4*0.8);
c14=Math.trunc((c4*0.8-c13)*60);

c15=Math.trunc(c4/2.5);
c16=Math.trunc((c4/2.5-c15)*60);

c17=Math.trunc((c4*0.2)*60);

c18=Math.trunc((c4/10)*60);

resultadoc3.innerHTML =c5;
resultadoc4.innerHTML =c6+" min/km";
resultadoc9.innerHTML ="2 vueltas 800m en "+c13+"min:"+c14+"seg";
resultadoc10.innerHTML ="1 vuelta 400m en "+c15+"min:"+c16+"seg";
resultadoc11.innerHTML ="1/2 vuelta 200m en "+c17+"seg";
resultadoc12.innerHTML ="1/4 vuelta 100m en "+c18+"seg";
}

var resultadoc3 = document.getElementById("resultadoc3");
var resultadoc4 = document.getElementById("resultadoc4");
var resultadoc9 = document.getElementById("resultadoc9");
var resultadoc10 = document.getElementById("resultadoc10");
var resultadoc11 = document.getElementById("resultadoc11");
var resultadoc12 = document.getElementById("resultadoc12");
var b2 = document.getElementById("extraer2");
b2.addEventListener("click", c1);


function c2()
{
var t5= document.getElementById("t5");
var t6= document.getElementById("t6");
var t7= document.getElementById("t7");

var c20;
var c21;
var c22;
var c30;

var c23;
var c24;
var c25;
var c26;
var c27;
var c28;
var c28;

c20=1*t5.value*60
c21=(c20+1*t6.value+t7.value/60)/21;
c22=Math.trunc(c21);
c30=Math.trunc((c21-c22)*60);



c23=Math.trunc(c21*0.8);
c24=Math.trunc((c21*0.8-c23)*60);

c25=Math.trunc(c21/2.5);
c26=Math.trunc((c21/2.5-c25)*60);

c27=Math.trunc((c21*0.2)*60);

c28=Math.trunc((c21/10)*60);

resultadoc20.innerHTML =c22;
resultadoc21.innerHTML =c30+" min/km";
resultadoc22.innerHTML ="2 vueltas 800m en "+c23+"min:"+c24+"seg";
resultadoc23.innerHTML ="1 vuelta 400m en "+c25+"min:"+c26+"seg";
resultadoc24.innerHTML ="1/2 vuelta 200m en "+c27+"seg";
resultadoc25.innerHTML ="1/4 vuelta 100m en "+c28+"seg";
}

var resultadoc20 = document.getElementById("resultadoc20");
var resultadoc21 = document.getElementById("resultadoc21");
var resultadoc22 = document.getElementById("resultadoc22");
var resultadoc23 = document.getElementById("resultadoc23");
var resultadoc24 = document.getElementById("resultadoc24");
var resultadoc25 = document.getElementById("resultadoc25");
var b3 = document.getElementById("extraer3");
b3.addEventListener("click", c2);

