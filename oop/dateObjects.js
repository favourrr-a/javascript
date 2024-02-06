
let date = new Date();

//let date = new Date(0); assume this is like the beginning of the calender year.
//let date = new Date(2023, 0, 1, 2, 3, 4, 5); year, month, day, time, even milliseconds
//let date = new Date("January 1, 2023 00:00:00"); you can also use strings

//get methods

// date.getFullYear(); // gets the year only
// date.getDate(); // gets the day of the month
// date.getDay(); // gets the day of the week as in 1 for monday,etc. sunday is zero
// date.getMonth(); // gets the month of the year
// date.getHours(); // gets the hour of day
// date.getMinutes(); // gets the minute of hour of day
// date.getSeconds(); // gets the seconds of minute of hour of day
// date.getMilliseconds(); // gets the milliseconds of second of minute of hour of day


//set methods

// date.setFullYear(2024); //sets the year
// date.setMonth(3); //sets the month of the year
// date.setDate(30); //sets the day of month of the year
// date.setHours(5); //sets the hour of day
// date.setMinutes(12); //sets the minute of hour of day
// date.setSeconds(42); //sets the seconds of minute of hour of day
// date.setMilliseconds(320); //sets the milliseconds of second of minute of hour of day



document.getElementById("myLabel").innerHTML = `${formatDate(date)} <br> ${formatTime(date)}`;

function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12? "pm" : "am";
    hours =  hours >= 12? (hours % 12) : hours; //or hours = (hours % 12) || 12
    minutes = minutes < 10? `0${minutes}` : `${minutes}`

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}