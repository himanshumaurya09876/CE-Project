var load=document.getElementById("load-problem2");
var spanLen=document.getElementById("spanLen-problem2");
var btn=document.getElementById("btnProblem2");
var formP1=document.getElementById("InpFormP2")
var problem1=document.getElementById("problem2")

var w=0;
var l=0;

var Mab=0;
var Qb=0;
var Ra=0;
var Rb=0;
var Bm=0;

function calculate(){
    Qa=(w*l*l)/(16);
    Ma=(3*w*l)/16;
    Ra=(11*w)/16;
    Rb=(5*w)/16;
    Bm=(w*l)/4;
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
    p1.appendChild(document.createTextNode("Final Moment at A : "+String(Ma)));
    problem1.appendChild(p1);

    var p2=document.createElement("p");
    p2.appendChild(document.createTextNode("Deflection at A : "+String(Qa)));
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