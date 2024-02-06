
async function loadFile(){

    let fileLoaded = false;

    if(fileLoaded){
        return("file loaded")
    }
    else{
        throw("file not loaded");
    }

}


loadFile().then(value => console.log(value)).catch(error => console.log(error))