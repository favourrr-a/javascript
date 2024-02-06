document.getElementById('submitButton').onclick = function(){
    let tempValue = Number(document.getElementById('tempValue').value)
    let temp;
    
    if (document.getElementById('tempCBtn').checked){
        temp = toCelcius(tempValue)
        document.getElementById('tempLabel').innerHTML = temp + "°C"

    }

    else if (document.getElementById('tempFBtn').checked){
        temp = toFahrenheit(tempValue)
        document.getElementById('tempLabel').innerHTML = temp + "°F"

    }

    else {
        document.getElementById('tempLabel').innerHTML = "Select a unit"
    }
}


function toCelcius(temp){
    return (temp - 32) * (5/9)
}

function toFahrenheit(temp){
    return (temp * 9 / 5 ) + 32
}
