console.log ("Hello World")
;
var x = playerScore = 0;
var y = computerScore = 0;
var z = tiescore = 0

const win ="Player Wins the round"
const lose = "Computer wins the round"
const tie = "Tie round"

var choices = ["ROCK", "PAPER", "SCISSORS"]
console.log (choices)
function myComputerChoice(){
let result = [Math.floor(Math.random()*choices.length)];
let myComputerChoice = ((choices[result]));
console.log("Computer has selected " + myComputerChoice);
return myComputerChoice
}
console.log(myComputerChoice)

function playerSelection(){
let playerChoice = prompt ("Please enter your choice"); 
let playerSelection = (playerChoice.toUpperCase());
console.log ("Player has selected " + playerSelection);
return playerSelection
}
console.log (playerSelection)



function playRound(playerSelection, myComputerChoice) {
        if (playerSelection=="ROCK"&&myComputerChoice=="SCISSORS" || playerSelection=="PAPER"&&myComputerChoice=="ROCK" || playerSelection=="SCISSORS"&&myComputerChoice=="PAPER"){
            x++;
            return win
        }else if (playerSelection=="ROCK"&&myComputerChoice=="PAPER" || playerSelection=="PAPER"&&myComputerChoice=="SCISSORS" || playerSelection=="SCISSORS"&&myComputerChoice=="ROCK"){ 
            y++;
            return lose
            }else if (playerSelection==myComputerChoice){
                z++;
            return tie
            }
    }
console.log (playRound)

function game (){
    for (let i= 0; i<5; i++) {

    //function playerSelection(){
    //    let playerChoice = prompt ("Please choose Rock, Paper or Scissors");
    //    let playerSelection=(playerChoice.toUpperCase());
    //    console.log ("Player has chosen " + playerSelection);
    //    return playerSelection
    //}
    //
    //function myComputerChoice(){
    //    let choices = ["rock","paper","scissors"];
    //    let result = [Math.floor(Math.random()*choices.length)];
    //    let myComputerChoice = choices[result];
    //    console.log("Computer has picked " + (myComputerChoice.toUpperCase().toString()));
    //    return myComputerChoice
    //}

    console.log(playRound(playerSelection(),myComputerChoice()))
    }
    if (x>y){return "Player has won the game"
    }else if (x<y){
        return "Computer has won the game"
    }
    else{
        return "The game is tied"
    }
}
//https://stackoverflow.com/questions/71590630/rock-paper-scissors-game-prompt-loop-and-scoreboard
//notes, what i've learnt is that the return value is essential
//also, console.log the function, to define it first, if not it will not run? hoisted function or something?