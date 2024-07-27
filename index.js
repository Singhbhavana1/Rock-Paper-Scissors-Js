const choises = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore =0;
let computerScore = 0;

function playGame(playerChoise) {
  const computerChoise = choises[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoise === computerChoise) {
    result = "It's a Tie!!!";
  } else {
    switch (playerChoise) {
      case "rock":
        result = computerChoise === "scissors" ? "You Win!" : "You Lose!";
        break;

      case "paper":
        result = computerChoise === "rock" ? "You Win!" : "You Lose!";
        break;

      case "scissors":
        result = computerChoise === "paper" ? "You Win!" : "You Lose!";
        break;
    }
  }

  playerDisplay.textContent = `Player : ${playerChoise}`;
  computerDisplay.textContent = `Computer : ${computerChoise}`;
  resultDisplay.textContent = result;
  

  resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
