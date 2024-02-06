
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const masterCardBtn = document.getElementById("masterCardBtn");
    const mtnBtn = document.getElementById("mtnBtn");
    if (myCheckBox.checked){
        console.log("you're subscribed")
    }
    else{
    console.log("you're not subscribed")
    }

    if (visaBtn.checked){
        console.log("you're paying with a VISA!")
    }

    else if (masterCardBtn.checked){
        console.log ("your'e paying wi a mastercard")
    }

    else if (mtnBtn.checked){
        console.log("you're paying wa mtn")
    }
    else{
        console.log("please choose a paymetn method")
    }
}