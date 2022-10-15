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
                computerScore++;
                break;
            case "player":
                playerScore++;
                break;
            case "tie":
                break;
        }
    console.log (`\n-------- Round: ${i+1} --------\n`+
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
   window.alert (`${[finalResult]}\n\n`+
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

function computerPlay () {
    return rockPaperSissors[getRndInteger(rockPaperSissors.length)];
}

function playerPlay () {
    let playerInput;
    let isthere;
    playerInput = prompt ("Your Turn to Play (Rock , Paper or Sissors)").toUpperCase();
    rockPaperSissors.forEach (element => {if(playerInput==element) isthere=true;
    });
    if (isthere)
    return playerInput;
      else {
        window.alert ("only (Rock,Paper or Sissors) are accpted");
        return playerPlay ();
      }
    } 

function getRndInteger (length) {
    return Math.floor (Math.random()*length);
}

