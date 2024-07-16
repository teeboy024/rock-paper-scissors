const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const resultMessage = document.getElementById("result-message");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
const historyList = document.getElementById("history-list");

let userScore = 0;
let computerScore = 0;

const choice = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  console.log(randomIndex)
  return choice[randomIndex];
}
getComputerChoice();

rockBtn.addEventListener("click", () => game("ROCK"));
paperBtn.addEventListener("click", () => game("PAPER"));
scissorsBtn.addEventListener("click", () => game("SCISSORS"));

function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (
    (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (userChoice === "PAPER" && computerChoice === "ROCK") ||
    (userChoice === "SCISSORS" && computerChoice === "PAPER")
  ) {
    win(userChoice, computerChoice);
  } else if (
    (userChoice === "SCISSORS" && computerChoice === "ROCK") ||
    (userChoice === "PAPER" && computerChoice === "SCISSORS") ||
    (userChoice === "ROCK" && computerChoice === "PAPER")
  ) {
    lose(userChoice, computerChoice);
  } else {
    draw(userChoice, computerChoice);
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreSpan.textContent = userScore;
  // console.log(userScore);
  resultMessage.innerHTML = `${userChoice} beats ${computerChoice}: Plus one point 🎉🎉 `;
  // addHistory(userChoice, computerChoice, win);
}
function lose(userChoice, computerChoice) {
  computerScore++;
  computerScoreSpan.textContent = computerScore;
  // console.log(computerScore);
  resultMessage.innerHTML = `${userChoice} loses to ${computerChoice}😢`;
  // addHistory(userChoice, computerChoice, lose);
}
function draw(userChoice, computerChoice) {
  resultMessage.innerHTML = `${userChoice} equals ${computerChoice} : No Winner`;
  // addHistory(userChoice, computerChoice, draw);
}

const history = document.getElementById("history");

history.addEventListener(
  "click",
  function addHistory(userChoice, computerChoice) {
    const li = document.createElement("li");
    li.textContent = `you choose ${userChoice}, computer chose ${computerChoice}`;

    historyList.prepend(li);
  }
);

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScoreSpan.innerHTML = userScore;
  computerScoreSpan.innerHTML = computerScore;
  resultMessage.innerHTML = "I have made my move already :) MAKE your MOVE!!";
  historyList.innerHTML = "";
});

let playerName = " ";
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const startButton = document.getElementById("startButton");
  modal.style.display = "flex";
  // userName = nameInput;

  startButton.addEventListener("click", function () {
    modal.style.display = "none";
    playerName = document.getElementById("nameInput").value;
    document.getElementById("userName").textContent = playerName;

    document.querySelector(".main-content").style.opacity = 1;
    document.querySelector(".main-content").style.pointerEvents = "auto";
  });
});
