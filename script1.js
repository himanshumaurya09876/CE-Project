var load=document.getElementById("load-problem1");
var spanLen=document.getElementById("spanLen-problem1");
var btn=document.getElementById("btnProblem1");
var formP1=document.getElementById("InpFormP1")
var problem1=document.getElementById("problem1")

var w=0;
var l=0;

var Mab=0;
var Qb=0;
var Ra=0;
var Rb=0;
var Bm=0;

function calculate(){
    Qb=(-1*w*l*l*l)/(48);
    Mab=(-w*l*l*l)/8;
    Ra=(5*w*l)/8;
    Rb=(3*w*l)/8;
    Bm=(9*w*l*l)/128;
}


function btnClicked(){
    w=load.value;
    l=spanLen.value;

    calculate();

    // console.log(Mab,Qb,Ra,Rb,Bm);

    formP1.remove();

    var h2=document.createElement("h2");
    h2.appendChild(document.createTextNode("Result"));
    problem1.appendChild(h2);

    var p1=document.createElement("p");
    p1.appendChild(document.createTextNode("Final Moment at A : "+String(Mab)));
    problem1.appendChild(p1);

    var p2=document.createElement("p");
    p2.appendChild(document.createTextNode("Deflection at A : "+String(Qb)));
    problem1.appendChild(p2);

    var p3=document.createElement("p");
    p3.appendChild(document.createTextNode("Support Reaction at A : "+String(Ra)));
    problem1.appendChild(p3);

    var p4=document.createElement("p");
    p4.appendChild(document.createTextNode("Support Reaction at B : "+String(Rb)));
    problem1.appendChild(p4);

    var p5=document.createElement("p");
    p5.appendChild(document.createTextNode("Maximum Bending Moment : "+String(Bm)));
    problem1.appendChild(p5);
}


btn.addEventListener("click",btnClicked)