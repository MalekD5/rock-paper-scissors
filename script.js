const rps = ['rock', 'paper', 'scissors']

function getComputerChoice() {
      const random = Math.floor(Math.random() * rps.length);
      return rps[random];
}

function printResult(result) {
      if (result === 'computer')
            console.log('Computer wins this round!')
      else if (result === 'player')
            console.log('You win this round!')
      else 
            console.log('This round is a draw!')
}

function playRound(playerChoice, computerChoice) {
      playerChoice = playerChoice.toLowerCase();
      computerChoice = computerChoice.toLowerCase();
      if (playerChoice === computerChoice) {
            return 'draw';
      }
      let computerWinningMove = false;

      if (playerChoice === 'rock') {
            computerWinningMove = computerChoice === 'paper';
      } else if (playerChoice === 'paper') {
            computerWinningMove = computerChoice === 'scissors'
      } else if (playerChoice === 'scissors') {
            computerWinningMove = computerChoice == 'rock';
      } else {
            return 'invalid';
      }

      return computerWinningMove ? 'computer' : 'player'; 
}
