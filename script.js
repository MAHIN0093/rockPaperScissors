const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const playerScoreSpan = document.querySelector("#player-score");
const computerScoreSpan = document.querySelector("#computer-score");
const roundResult = document.querySelector("#round-result");
const playAgainBtn = document.querySelector("#play-again");
const player_choice = document.getElementById('player-choice');
const computer_choice = document.getElementById('computer-choice');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compMove = choices[randomIndex];
    computer_choice.src = `images/${compMove}.jpg`;
    return compMove;
}

function playRound(playerChoice) {
    player_choice.src = `images/${playerChoice}.jpg`;
    const computerChoice = getComputerChoice();
    let result;

    if (playerChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore++;
            result = "You lose! Paper beats Rock.";
        } else if (computerChoice === "scissors") {
            playerScore++;
            result = "You win! Rock beats Scissors.";
        } else {
            result = "It's a tie!";
        }
    } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            playerScore++;
            result = "You win! Paper beats Rock.";
        } else if (computerChoice === "scissors") {
            computerScore++;
            result = "You lose! Scissors beats Paper.";
        } else {
            result = "It's a tie!";
        }
    } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore++;
            result = "You lose! Rock beats Scissors.";
        } else if (computerChoice === "paper") {
            playerScore++;
            result = "You win! Scissors beats Paper.";
        } else {
            result = "It's a tie!";
        }
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundResult.textContent = result;

    if (playerScore === 5) {
        roundResult.textContent = "You won the game! Congratulations!";
        disableButtons();
    } else if (computerScore === 5) {
        roundResult.textContent = "You lost the game! Better luck next time.";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll(".selection button").forEach(button => {
        button.disabled = true;
        button.style.opacity = 0.5;
    });
    playAgainBtn.style.display = "block";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
    roundResult.textContent = "Make your move!";
    document.querySelectorAll(".selection button").forEach(button => {
        button.disabled = false;
        button.style.opacity = 1;
    });
    playAgainBtn.style.display = "none";
}

document.querySelectorAll(".selection button").forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

playAgainBtn.addEventListener("click", resetGame);
