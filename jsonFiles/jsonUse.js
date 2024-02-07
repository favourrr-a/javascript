//stringify
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

//parse

const names2 = `["Father", "son", "Holy Spirit"]`;

const person2 = `{
    "name": "Gojo",
    "age": 28,
    "isEmoloyed": true,
    "hobbies": "none"
}`;

const people2 = `[
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
]`

const jsonParse = JSON.parse(names2);
const jsonParse2 = JSON.parse(person2);
const jsonParse3 = JSON.parse(people2);
console.log(jsonParse);
console.log(jsonParse2);
console.log(jsonParse3);

//note the backticks make it a string which we then parse
