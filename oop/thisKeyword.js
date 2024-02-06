const car1 = {
    //properties
    model: "cherokee",
    color: "black",
    year: 2023,

    //methods

    drive: function(){
        console.log("you're driving" , this.model)
    },

    brake: function(){
        console.log("the car has stopped")
    }
}

const car2 = {
    //properties
    model: "bmw",
    color: "blue",
    year: 2023,

    //methods

    drive: function(){
        console.log("you're driving the" , this.model)
    },

    brake: function(){
        console.log("the car has stopped")
    }
}

car2.drive();