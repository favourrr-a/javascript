
//getElementByID

/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

*/


//getElementByName

/*

let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value)
    }
})
*/


//getElementByTagName

/*
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "skyblue";

for(const vegetable of vegetables){
    console.log(vegetable);
}
*/

//getElementByClassName

/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "yellow";
*/


//querySelector - ID

/*
let elementI = document.querySelector("#myTitle");
elementI.style.backgroundColor = "pink";
*/

//querySelector - class

let elementC = document.querySelector(".snacks");
elementC.style.backgroundColor = "grey";