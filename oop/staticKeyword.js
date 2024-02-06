class Car{

    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car1 = new Car("Cherokee");
const car2 = new Car("CyberTruck");
const car3 = new Car("Mustang");

console.log(Car.numberOfCars);
Car.startRace();