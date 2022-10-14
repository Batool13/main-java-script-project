game();
function game(){
    let playerScore=0;
    let computerScore=0;
    for (let i=0;i<5;i++){
        const playerSelection=playerPlay();
        const computerSelection=computerPlay();
        switch(playRound(playerSelection,computerSelection)){
            case "computer":
                computerScore=computerScore+1;
                break;
            case "player":
                playerScore=playerScore+1;
                break;
            case "tie":
                break;
        }
    console.log(`\ncomputer selection: ${computerSelection}\nyour selection: ${playerSelection}`)
    console.log(`Your Score: ${playerScore}\ncomputer Score: ${computerScore}`);
   }
   let winner;
   if (playerScore>computerScore)
   winner="🎊🤩🎊 You WON 🎊🤩🎊"
   if (playerScore<computerScore)
   winner="Game Over"
   if (playerScore==computerScore)
   winner="TIE"
   window.alert(`${[winner]}\n\nYour Score: ${playerScore}\ncomputer Score: ${computerScore}`);
   console.log(`${[winner]}`);
}

function playRound(plaerSelection,computerSelection){
    if(plaerSelection==computerSelection){
        return "tie";
    }
    else if ((plaerSelection=="ROCK" && computerSelection=="SISSORS")
    || (plaerSelection=="SISSORS" && computerSelection=="PAPER")
    || (plaerSelection=="PAPER" && computerSelection=="ROCK")){
        return "player";
    }
    else if ((computerSelection=="ROCK" && plaerSelection=="SISSORS")
    || (computerSelection=="SISSORS" && plaerSelection=="PAPER")
    || (computerSelection=="PAPER" && plaerSelection=="ROCK")){
        return "computer";
    }
}

function computerPlay() {
    let rockPaperSissors;
    let random0_2 = getRndInteger(0,2);
    switch (random0_2) {
        case 0:
            rockPaperSissors = "ROCK";
            break;
        case 1:
            rockPaperSissors = "PAPER";
            break;
        case 2:
            rockPaperSissors = "SISSORS";
    }
    return rockPaperSissors;
}

function playerPlay(){
    let playerInput;
    playerInput = prompt("Your Turn to Play (Rock , Paper or Sissors)").toUpperCase();
    if(playerInput=="ROCK" || playerInput=="PAPER" || playerInput=="SISSORS" )
    return playerInput;
    else {
        window.alert("only (ROCK , PAPER or SISSORS) are accpted");
        return playerPlay();  
    } 
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

