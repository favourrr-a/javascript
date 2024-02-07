const names = ["Father", "son", "Holy Spirit"];

const person = {
    "name": "Gojo",
    "age": 28,
    "isEmoloyed": true,
    "hobbies": "none"
};

const people = [
    {
        "name": "Gojo",
        "age": 28,
        "isEmoloyed": true,
        "hobbies": "none"
    },
    {
        "name": "Geto",
        "age": 28,
        "isEmoloyed": true,
        "hobbies": "none"
    },
    {
        "name": "Utahime",
        "age": 28,
        "isEmoloyed": true,
        "hobbies": "none"
    }
]

const jsonString = JSON.stringify(names);
const jsonString2 = JSON.stringify(person);
const jsonString3 = JSON.stringify(people);
console.log(jsonString);
console.log(jsonString2);
console.log(jsonString3);