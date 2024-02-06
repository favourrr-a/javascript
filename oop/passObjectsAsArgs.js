class Car{

    constructor(model, year, colour){
        this.model = model;
        this.year = year;
        this.colour = colour;
    }
}

const car1 = new Car("cybertruck", 2023, "silver");
const car2 = new Car("jeep cherokee", 2021, "black");
const car3 = new Car("jeep wrangler", 2022, "black");

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);
changeColor(car2, "green");
displayInfo(car2);


function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.colour);
}

function changeColor(car, newColour){
    car.colour = newColour;
}