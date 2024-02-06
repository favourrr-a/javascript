let count = 0;

document.getElementById("increaseBtn").onclick = function(){
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseBtn").onclick = function(){
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

//arrow function expressions

const greeting = (userName) => console.log(`hello ${userName}`)

greeting ("favour")

const percent = (x, y) => console.log((x/y)*100)

percent(50,60);

let grades = [100, 50, 90, 60, 80, 70]
grades.sort((x, y) =>  y - x);
grades.forEach((element) => console.log(element));


//shuffle array
let cards = ["a", "2", "3", "4", "5", "king", "queen"]

shuffle(cards);
console.log(cards);
function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -=1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}