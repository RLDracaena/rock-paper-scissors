


//selectors
const roundContainer = document.querySelector(".round-number");
const startButton = document.querySelector(".play");
const masterBoard = document.querySelector(".master-game-board")
const winningPlayer = document.querySelector(".winner");
const playAgain = document.querySelector(".play-again-button-container")
const computerScoreContainer = document.querySelector(".computer-score");
const humanScoreContainer = document.querySelector(".human-score");
const info = document.querySelector(".info")
const humanChoiceContainer = document.querySelector(".human-choice");
const computerChoiceContainer = document.querySelector(".computer-choice");
const resetButton = document.querySelector(".play-again")


//Start game
startButton.addEventListener("click", startGame);

winningPlayer.innerText = "";

function startGame() {
    masterBoard.classList.remove("hidden");
    startButton.classList.add("hidden");
    info.classList.add("hidden")
    roundNumber = 1;
    roundContainer.innerText = "Round: " + roundNumber
    winningPlayer.innerText = "";
    humanScore = 0;
    humanScoreContainer.innerText = "Player: " + humanScore;
    computerScore = 0
    computerScoreContainer.innerText = "Computer: " + computerScore;
    humanChoiceContainer.innerText = ""
    computerChoiceContainer.innerText = ""

}


function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * choices.length) 
    let computerChoice = choices[randomNumber]
    return computerChoice;
    }

// get human choice via buttons
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

const rockButton = document.querySelector(".rockbtn")
rockButton.addEventListener("click", () => 
    {playRound("Rock", computerChoice)});
    
const paperButton = document.querySelector(".paperbtn")
paperButton.addEventListener("click", () => 
    {playRound("Paper", computerChoice)});
    
const scissorsButton = document.querySelector(".scissorsbtn")
scissorsButton.addEventListener("click", () => 
    {playRound("Scissors", computerChoice)});


// play a round
function playRound(humanChoice, computerChoice) {

    let winner;
    computerChoice = getComputerChoice();
    console.log(humanChoice + " VS " + computerChoice)

    // fill the human and computer choice containers

    if (humanChoice === "Rock") {humanChoiceContainer.innerText = "Rock"}
    else if (humanChoice === "Paper") {humanChoiceContainer.innerText = "Paper"}
    else if (humanChoice === "Scissors") {humanChoiceContainer.innerText = "Scissors"}


    computerChoiceContainer.innerText = computerChoice;

    //fill the scores
 
    humanScoreContainer.innerText = "Player: " + humanScore;
    computerScoreContainer.innerText = "Computer: " + computerScore;

    //compare the choices
 
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        winner = "You Lose! " + computerChoice + " beats " + humanChoice
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        winner = "You Win! " + humanChoice + " beats " + computerChoice
    } 
    else {
        winner = "It's a draw!"
    }

    //return the winner
    console.log(winner)
    winningPlayer.innerText = winner;

    //decide the scores
    if (winner === "You Win! " + humanChoice + " beats " + computerChoice) {
        humanScore = humanScore + 1;
        humanScoreContainer.innerText = "Player: " + humanScore;
        winningPlayer.style.color = "green"
    }
    else if (winner === "You Lose! " + computerChoice + " beats " + humanChoice) {
        computerScore = computerScore + 1;
        computerScoreContainer.innerText = "Computer: " + computerScore;
        winningPlayer.style.color = "darkred"
    }
    else if (winner === "It's a draw!") {
        computerScore = computerScore;
        humanScore = humanScore;
        winningPlayer.style.color = "lightblue"
    }

    console.log("Player: "+ humanScore, "Computer: " + computerScore);

    roundNumber++
    roundContainer.innerText = "Round: " + roundNumber

    if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {winningPlayer.innerText = "You Win!"
        winningPlayer.style.color = "green"
    }
    else if (computerScore === 5){winningPlayer.innerText = "You Lose!"
        winningPlayer.style.color = "darkred"
    }
    else if (computerScore === 5 && humanScore === 5) {winningPlayer.innerText = "It's a draw!"
        winningPlayer.style.color = "lightblue"
    } 

    masterBoard.classList.add("hidden")
    playAgain.classList.remove("hidden")

    }
}

resetButton.addEventListener("click", resetGameBoard)

function resetGameBoard() {
    startButton.classList.remove("hidden");
    info.classList.remove("hidden")
    playAgain.classList.add("hidden")
    winningPlayer.innerText = "";
    humanChoiceContainer.innerText = ""
    computerChoiceContainer.innerText = ""

}

