class Car{
    constructor(power){
        this._gas = 25;
        this._power = power;
    }

    get power(){
        return `${this._power} horsepower`;
    }
    get gas(){
        return `${this._gas} litres`;
    }

    set gas(value){
        if (value > 50){
            value = 50
        }
        else if (value < 0){
            value = 0;
        }
        this._gas = value;
    }
}

let car = new Car(400);

console.log(car.power)
console.log(car.gas = 20)


/* Why do we use the underscore convention in naming the attribute?

Think of a getter like a little assistant that hands you information about something, in this case, the power of a car. Now, imagine you're asking your assistant, "Hey, what's the power of this car?" If both the thing you're asking about (the power) and the assistant have the same name (both called "power"), things get confusing. It's like your assistant trying to ask itself the question over and over, getting stuck in a loop.

To avoid this confusion, we use a different name for the actual thing (the power) and the assistant (the getter). So, the real power is stored as _power, and when you ask, "What's the power?" the assistant, named power, goes and fetches the information from _power without getting tangled in a loop of self-questions. It's like giving each its own clear job to avoid a mess.
*/

