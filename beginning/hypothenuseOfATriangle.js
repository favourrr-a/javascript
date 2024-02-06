let a;
let b;
let c;
/*
a = window.prompt("enter the length of the opposite side");

a = Number(a);

b = window.prompt("enter the length of the adjacent side");

a = Number(b);

c = Math.sqrt(Math.pow(b,2) + Math.pow(a,2));

console.log("the hypothenuse is", c);

*/

document.getElementById("submitButton").onclick = function(){

    a = document.getElementById("aTextBox").value;

    a = Number(a);

    b = document.getElementById("bTextBox").value;

    b = Number(b);

    c = Math.sqrt(Math.pow(b,2) + Math.pow(a,2));

    document.getElementById("cLabel").innerHTML = "side c: " + c;

}