
let grade = "i passed";

switch(grade){
    case "A": 
        console.log ("you're HIM")
        break;
    case "B+": 
        console.log ("good job. almost an A")
        break;
    case "B": 
        console.log ("good job")
        break;
    case "C+":   
        console.log ("average")
        break;
    case "C": 
        console.log ("made it to the barely average grade")
        break;
    case "D+": 
        console.log ("not bad")
        break;
    case "D": 
        console.log ("barely passed but kudods for no resit")
        break;
    case "E": 
        console.log ("it's an E... but you failed.")
        break;
    case "F": 
        console.log ("you failed")
        break;
    default:
        console.log(grade, "is not a grade")
        break;
}