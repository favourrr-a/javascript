let age = window.prompt("how old");
console.log(typeof age);

age = Number(age); //converts
age += 1;

console.log("happy birthday you're", age, "years old");