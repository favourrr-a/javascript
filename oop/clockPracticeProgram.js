const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12? "pm" : "am";
        hours = (hours % 12) || 12; 
       

//what i'm using to format the zeroes of the time.
        hours = hours < 10? `0${hours}` : `${hours}`;
        minutes = minutes < 10? `0${minutes}` : `${minutes}`;
        seconds = seconds < 10? `0${seconds}` : `${seconds}`;

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

/*this function can also be used to format the zeroes.
    function formatZeroes(time){
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

    //along with this block of code
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
*/
}