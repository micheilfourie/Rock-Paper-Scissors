const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resultMsg = document.getElementById("results-msg");
const winnerMsg = document.getElementById("winner-msg");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn")
const resetBtn = document.getElementById("reset-game-btn");

const getRandomComputerResult = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

const hasPlayerWonTheRound = (player, computer) => {
    if (player === "Rock" && computer === "Scissors" ||
        player === "Paper" && computer === "Rock" ||
        player === "Scissors" && computer === "Paper") {
        return true;
    } else {
        return false;
    }
};

const getRoundResults = (userOption) => {
    const computerResult = getRandomComputerResult();
    const result = hasPlayerWonTheRound(userOption, computerResult);

    if (!hasWinner()) {
        if (result) {
            playerScore.textContent++;
            resultMsg.textContent = `Player wins this round! ${userOption} beats ${computerResult}`;

        } else if (!result && userOption === computerResult) {
            resultMsg.textContent = `It's a tie! Both chose ${userOption}`

        } else {
            computerScore.textContent++;
            resultMsg.textContent = `Computer wins this round! ${computerResult} beats ${userOption}`
        }

        if (hasWinner()) {
            if (playerScore.textContent > computerScore.textContent) {
                winnerMsg.textContent = "Player wins the game!";
            } else {
                winnerMsg.textContent = "Computer wins the game!";
            }
        }
    }
};

const hasWinner = () => {

    if (playerScore.textContent === "3" || computerScore.textContent === "3") {
        resetBtn.style.display = "block";
        return true;
    } else {
        resetBtn.style.display = "none";
        return false;
    }
};

const resetGame = () => {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    resultMsg.textContent = "";
    winnerMsg.textContent = "";
    resetBtn.style.display = "none";
};

resetBtn.addEventListener("click", resetGame);
rockBtn.addEventListener("click", () => getRoundResults("Rock"));
paperBtn.addEventListener("click", () => getRoundResults("Paper"));
scissorsBtn.addEventListener("click", () => getRoundResults("Scissors"));




