let rockPaperSissors = ["ROCK","PAPER","SISSORS"];
game();
function game() {
    let playerScore=0;
    let computerScore=0;
    for (let i=0;i<5;i++) {
        const playerSelection=playerPlay();
        const computerSelection=computerPlay();
        switch(playRound(playerSelection,computerSelection)){
            case "computer":
                computerScore++;;
                break;
            case "player":
                playerScore++;;
                break;
            case "tie":
                break;
        }
    console.log(`\n-------- Round: ${i+1} --------\n`+
    `computer selection: ${computerSelection}\n`+
    `your selection: ${playerSelection}\n\n`+
    `Your Score: ${playerScore}\n`+
    `computer Score: ${computerScore}`
    );    
   }
   let finalResult;
   if (playerScore>computerScore)
   finalResult="🎊🤩🎊 You WON 🎊🤩🎊";
   if (playerScore<computerScore)
   finalResult="Game Over";
   if (playerScore==computerScore)
   finalResult="TIE";
   window.alert(`${[finalResult]}\n\n`+
   `Your Score: ${playerScore}\n`+
   `Computer Score: ${computerScore}`
   );
   console.log (`\n${[finalResult]}`);
}

function playRound (playrSelection,computerSelection) {
    if(playrSelection==computerSelection){
        return "tie";
    }
    else if ((playrSelection=="ROCK" && computerSelection=="SISSORS")
    || (playrSelection=="SISSORS" && computerSelection=="PAPER")
    || (playrSelection=="PAPER" && computerSelection=="ROCK")){
        return "player";
    }
    else 
        return "computer";
    
}

function computerPlay() {;
    switch (computerRanNum=getRndInteger(rockPaperSissors.length)) {
        case 0:
            return rockPaperSissors[0];
            break;
        case 1:
            return rockPaperSissors[1];
            break;
        case 2:
            return rockPaperSissors[2];
    }
}

function playerPlay() {
    let playerInput;
    playerInput = prompt("Your Turn to Play (Rock , Paper or Sissors)")
    .toUpperCase();
    if(playerInput=="ROCK" || playerInput=="PAPER" || playerInput=="SISSORS" )
    return playerInput;
    else {
        window.alert("only (Rock,Paper or Sissors) are accpted");
        return playerPlay();  
    } 
}

function getRndInteger(length) {
    return Math.floor(Math.random() * length);
}

