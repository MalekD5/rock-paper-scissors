let computerResult = 0,
  PlayerResult = 0;
const rps = ["rock", "paper", "scissors"];
const resultdiv = document.createElement('div');
const scorediv = document.createElement('div');

setup();

function setup() {
  const rockbtn = document.querySelector("#rock");
  const paperbtn = document.querySelector("#paper");
  const scissorsbtn = document.querySelector("#scissors");
  const resetbtn = document.querySelector("#reset");

  rockbtn.addEventListener("click", () => playRound("rock"));
  paperbtn.addEventListener("click", () => playRound("paper"));
  scissorsbtn.addEventListener("click", () => playRound("scissors"));
  resetbtn.addEventListener("click", () => {
    PlayerResult = 0;
    computerResult = 0;
    update(undefined);
  });

  const container = document.querySelector('.container');
  container.appendChild(scorediv);
  container.appendChild(resultdiv);
}

function showResult(result) {
      if (result === 'computer')
            return 'Computer wins this round!';
      else if (result === 'player')
            return 'You win this round!';
      else 
            return 'This round is a draw!';
}

function update(result) {
      if (result)
         scorediv.innerText = `${showResult(result)}`
      else 
         scorediv.innerText = '';
      resultdiv.innerText = `You = ${PlayerResult}\n Computer = ${computerResult}`;
}

function getComputerChoice() {
  const random = Math.floor(Math.random() * rps.length);
  return rps[random];
}

function runGame(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  const computerChoice = getComputerChoice().toLowerCase();
  if (playerChoice === computerChoice) {
    return "draw";
  }
  let computerWinningMove = false;

  if (playerChoice === "rock") {
    computerWinningMove = computerChoice === "paper";
  } else if (playerChoice === "paper") {
    computerWinningMove = computerChoice === "scissors";
  } else if (playerChoice === "scissors") {
    computerWinningMove = computerChoice == "rock";
  } else {
    return "invalid";
  }

  return computerWinningMove ? "computer" : "player";
}

function playRound(playerChoice) {
      const result = runGame(playerChoice);
      if (result === 'computer')
            computerResult++;
      else if (result === 'player')
            PlayerResult++;
      
      update(result);
}
