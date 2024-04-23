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


function getHumanChoice(){
    const humanChoice = prompt("Choose an option between rock, paper and scissors: ");
    return humanChoice
}

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        alert("Draw, you both chose " + humanChoice);
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        alert("You lose! Paper beats rock.");
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        alert("You won! Rock beats scissors.");
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        alert("You lose! Scissors beats paper.");
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        alert("You won! Paper beats rock.");
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        alert("You lose! Rock beats scissors");
    } else{
        alert("You won! Scissors beats paper.");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection,computerSelection));

console.log(computerSelection);
console.log(humanSelection);
