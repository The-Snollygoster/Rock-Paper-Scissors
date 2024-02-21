const buttons = document.querySelectorAll('button');
const selectors = document.querySelector('#selectors');
const finalResult = document.querySelector('#winner');
const gameWinner = document.querySelector('#gameWinner');
let playerWins = 0;
let compWins = 0;
let ties = 0;
let result = '';

function playRound(input) {
    function getComputerChoice() {
        function getRandomInt(max) {
            return Math.floor(Math.random()*max);
        }

        let randomInt = getRandomInt(3);
                
        if (randomInt === 0) {
            computerChoice = 'rock';
        } else if (randomInt === 1) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
        return computerChoice;
    }
    let x = getComputerChoice();
    let y = input;
    let result = y+x;
    let winner = 'tie';
    selectors.textContent = `You chose ${y}, the computer chose ${x}`;
    if (result === 'rockscissors' || result === 'paperrock' || result === 'scissorspaper') {
        winner = 'You won!';
        playerWins++;
    } else if (result === 'rockpaper' || result === 'paperscissors' || result === 'scissorsrock') {
        winner = 'You lost.';
        compWins++;
    } else {
        winner = 'A tie!';
        ties++;
    }

    if (playerWins == 5 || compWins == 5) {
        if (playerWins > compWins) {
            result = 'Congratulations! You won the game ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
            } else if (compWins > playerWins) {
            result = 'Commiserations. You lost the game ' + compWins + ' to ' + playerWins + ' with ' + ties + ' ties';
            } else {
            result = 'Wow, a tie! ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
            }
        playerWins = 0;
        compWins = 0;
        ties = 0;
        return gameWinner.textContent = result;
    };
    return finalResult.textContent = winner;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameWinner.textContent = '';
        playRound(button.id);
    });
});

// I also want to add small animations. When I click a button to start a round, I want the little hands to appear
// like a virtual game of RPS, and show what you and the computer picked. I'd also like to add some kind of funny
// image when you win, lose or draw. And then finally maybe some final screen when 5 rounds have been played and 
// a winner decided.