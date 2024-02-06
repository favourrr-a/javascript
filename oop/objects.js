const car = {
    //properties
    model: "cherokee",
    color: "black",
    year: 2023,

    //methods

    drive: function(){
        console.log("you're driving")
    },

    brake: function(){
        console.log("the car has stopped")
    }
}

console.log(car.model);
car.drive();