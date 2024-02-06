// forEach() method

console.log("forEach() method")
let citiesToVisit = ["paris", "venice", "shibuya"];

citiesToVisit.forEach(capaitalize);
citiesToVisit.forEach(print)
function capaitalize (element, index, array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}

function print(element){
    console.log(element);
}

//map() method
console.log("map() method")
let numbers = [1,2,3,4,5];

let squares = numbers.map(square);

function square(element){
    return Math.pow(element,2)
}

function print(element){
    console.log(element)
}

squares.forEach(print)

//filter() method
console.log("filter() method")
let ages = [18,21,19,20]
let aboveEighteen = ages.filter(checkAge)
aboveEighteen.forEach(print)
function checkAge(element){
    return element > 18
}
function print(element){
    console.log(element)
}

//reduce() method
let prices = [5, 10,15,20,25]
let total = prices.reduce(checkOut);

console.log(`the total is $${total}`);

function checkOut(total, element){
    return total + element;
}

//sort an array
let grades = [100, 60, 80, 90,70]

grades = grades.sort(ascendingSort)
grades.forEach(print)
function descendingSort(x, y){
    return y - x;
}

function ascendingSort(x, y){
    return x - y;
}

function print(element){
    console.log(element)
}