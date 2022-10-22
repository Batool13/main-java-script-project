let rockPaperSissors = ["ROCK","PAPER","SISSORS"];
let playerScore=0;
let computerScore=0;

const rock = document.createElement ('button');
rock.setAttribute('class','rock-sissors-paper-button rock-background-img');
document.body.appendChild (rock);
rock.addEventListener ('click', ()=> game('ROCK'));
rock.addEventListener ('click',opacityAnimate);
const paper = document.createElement ('button');
paper.setAttribute ('class','rock-sissors-paper-button paper-background-img')
document.body.appendChild (paper);
paper.addEventListener ('click', ()=> game('PAPER'));
paper.addEventListener ('click',opacityAnimate);
const sissors = document.createElement ('button');
sissors.setAttribute ('class','rock-sissors-paper-button sissors-background-img')
document.body.appendChild (sissors);
sissors.addEventListener ('click',()=>  game("SISSORS"));
sissors.addEventListener ('click',opacityAnimate);

function opacityAnimate () {
    this.animate([
       { // from
         opacity: 0,
         color: "#fff"
       },
       { // to
         opacity: 1,
         color: "#000"
       }
     ], 2000);
     return;

}
const result_div = document.createElement ('div');
result_div.setAttribute ('class' , 'div-results');
document.body.appendChild (result_div);

result_div.textContent= "Player VS Computer";
const score_div = document.createElement ('div');
score_div.setAttribute ('class' , 'div-results');
document.body.appendChild (score_div);

const final_result_div = document.createElement ('div');
final_result_div.setAttribute ('class' , 'div-results');

function game(playerSelection) {
    final_result_div.textContent="";
    let getPlayerSelection = playerSelection;
    console.log (playerSelection);
        const computerSelection=computerPlay ();
        switch (playRound (playerSelection,computerSelection)) {
            case "computer":
                computerScore++;
                break;
            case "player":
                playerScore++;
                break;
            case "tie":
                break;  
   }

   score_div.textContent= playerScore +" | "+ computerScore;
   if ( playerScore==5 || computerScore==5)
   {
    if (checkWinner (playerScore,computerScore) ) {
     playerScore=0;
     computerScore=0;
    }
   }
}

function playRound (playrSelection,computerSelection) {
    if (playrSelection == computerSelection) {
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
    return rockPaperSissors [ getRndInteger (rockPaperSissors.length) ];
}


function getRndInteger (length) {
    return Math.floor (Math.random()*length);
}

function checkWinner (playerScore,computerScore) {
    console.log (playerScore,computerScore);

     document.body.appendChild (final_result_div);
     if (computerScore > playerScore)
     final_result_div.textContent= "Game Over";
     if (playerScore > computerScore)
     final_result_div.textContent= "🎊🤩🎊 You WON 🎊🤩🎊";
     return(true);
}

