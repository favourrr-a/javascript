let item = "cryptocurrency";
let price = 420.60;
let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(){
    alert(`Buy this ${item} for $${price}!`)
}

function secondMessage(){
    alert(`This is not a scam!`)
}

function thirdMessage(){
    alert(`DO ITTT!!`)
}

document.getElementById("myButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`thanks for buying :)`)

}