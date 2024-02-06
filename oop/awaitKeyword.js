
async function loadFile(){

    let fileLoaded = false;

    if(fileLoaded){
        return("file loaded")
    }
    else{
        throw("file not loaded");
    }

}

async function startProcess(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error)
    }   
}
startProcess();

