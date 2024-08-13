//get computer choice
function getComputerChoice() {

//get a random number between 1 and 3
    let randomNumber = Math.floor(Math.random() * 3) + 1

//assign rock, paper and scissors to each number
    let computerChoice;
    switch (randomNumber) {
        case 1: 
        computerChoice = "rock";
        break;
        case 2:
        computerChoice = "paper";
        break;
        case 3:
        computerChoice = "scissors";    
    }

//return the computer's choice
    return computerChoice;
}

//get the player's choice
function getHumanChoice() {

//prompt the player to give choice
    let humanChoice = prompt("Rock, Paper or Scissors: Please choose one!").toLowerCase()
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Rock, Paper or Scissors: Please choose one!").toLowerCase()
    }

//return the player's choice
    return humanChoice;
}



function playGame() {
//the current round number (of 5 rounds)
let roundNumber = 1;

//score board
let humanScore = 0;
let computerScore = 0;
let winner;


//play a round
function playRound(humanChoice, computerChoice) {
    console.log("Round: " + roundNumber);
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    
    console.log(humanChoice + " VS " + computerChoice)

//compare the choices
 
    if (humanChoice === "rock" && computerChoice === "paper") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    } 
    else {
        winner = "It's a draw!"
    }

//return the winner
    console.log(winner)

//decide the scores
    if (winner === "You Win! " + humanChoice + " beats " + computerChoice) {
        humanScore++;
    }
    else if (winner === "You Lose! " + computerChoice + " beats " + humanChoice) {
        computerScore++;
    }
    else if (winner === "It's a draw!") {
        computerScore = computerScore;
        humanScore = humanScore;
    }

    console.log("Player: "+ humanScore, "Computer: " + computerScore);
}

// play 5 rounds of the game
while (roundNumber < 6) {
    playRound();
    roundNumber++;
}

//decide the overall winner after 5 rounds
if (humanScore < computerScore) {
    console.log("The computer wins the game!");
}
else if (humanScore > computerScore) {
    console.log("You win the game!");
}
else {
    console.log("It's a draw!");
}


}

// play the game
playGame()

