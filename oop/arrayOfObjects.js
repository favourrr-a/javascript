class Car{

    constructor(model, year, colour){
        this.model = model;
        this.year = year;
        this.colour = colour;
    }

    drive(){
        console.log(`the ${this.model} is moving`)
    }
}

const car1 = new Car("cybertruck", 2023, "silver");
const car2 = new Car("jeep cherokee", 2021, "black");
const car3 = new Car("jeep wrangler", 2022, "black");
const car4 = new Car("ferrari", 2021, "white");

const cars = [car1, car2, car3];

console.log(cars[0].model);

startRace(cars)
function startRace(cars){
    for (const car of cars){
        car.drive();
    }
}