//synchronous
console.log("start");
console.log("this step is synchronous");
console.log("end");


//asynchronous
console.log("start");
setTimeout(() => console.log("this is asynchronous"), 5000);
console.log("end");
