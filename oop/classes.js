class Player{
    score = 0;

    pause(){
        console.log("you paused the game")
    }

    exit(){
        console.log("you exited the game")
    }
}

const player1 = new Player();

console.log(player1.exit());