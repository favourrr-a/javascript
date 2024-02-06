class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study(){
        console.log(`${this.name} is studying`)
    }
}

const student = new Student("Favour", 18, 3.59);

console.log(student.name);
console.log(student.age);
console.log(student.gpa);
student.study();