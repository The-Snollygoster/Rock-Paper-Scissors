const header = document.querySelector('.header');
const headerTwo = document.querySelector('.headerTwo');
const container = document.querySelector('.container');
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

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    selectors.textContent = '';
    finalResult.textContent = '';
    gameWinner.textContent = '';
    playRound('rock');
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    selectors.textContent = '';
    finalResult.textContent = '';
    gameWinner.textContent = '';
    playRound('paper');
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    selectors.textContent = '';
    finalResult.textContent = '';
    gameWinner.textContent = '';
    playRound('scissors');
});