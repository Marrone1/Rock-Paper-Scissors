/*First, computer get a random argument from 3 options,
Player choose his own option from the same 3 possibilities,
Compare the two selections
Display message with the result (you win, you lose, draw)
*/



function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    teste = Math.floor(Math.random()*3);
    const computerChoice = options[teste];
    return computerChoice
}

function getPlayerChoice(){
    const playerChoice = prompt("Please, choose between Rock, Paper or Scissors: ")
    return playerChoice
}
function singleRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        alert("Draw! You both got " + playerSelection);
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        alert("You Lose! Paper beats Rock.")
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        alert("You Win! Rock beats Scissors.")
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        alert("You Win! Paper beats Rock.")
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        alert("You Lose! Scissors beats Paper.")
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        alert("You Win! Scissors beats Paper.")
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        alert("You Lose! Rock beats Scissors.")
    }

}
const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
console.log(singleRound(playerSelection,computerSelection))

console.log(computerSelection);
console.log(playerSelection);




