const buttons = document.querySelectorAll('button');
const selectors = document.querySelector('#selectors');
const finalResult = document.querySelector('#winner');
const gameWinner = document.querySelector('#gameWinner');
let playerWins = 0;
let compWins = 0;
let ties = 0;
let result = '';
let leftHand = document.querySelector('#leftHand');
let rightHand = document.querySelector('#rightHand');
let stars = document.querySelector('.stars');
let player = document.querySelector('#player');
let comp = document.querySelector('#comp');
let newGame = document.querySelector('#newGame');
var newGameButton = document.createElement('button');
newGameButton.textContent = 'AGAIN!';

function playRound(input) {
    function getComputerChoice() {
        function getRandomInt(max) {
            return Math.floor(Math.random()*max);
        }
        let randomInt = getRandomInt(3); 
        if (randomInt === 0) {
            computerChoice = 'rock';
            rightHand.src = './imgs/rockhand.png';
        } else if (randomInt === 1) {
            computerChoice = 'paper';
            rightHand.src = './imgs/paperhand.png';
        } else {
            computerChoice = 'scissors';
            rightHand.src = './imgs/scissorshand.png';
        }
        return computerChoice;
    }

    if (input == 'rock') {
        leftHand.src = './imgs/rockhand.png';
    } else if (input == 'paper') {
        leftHand.src = './imgs/paperhand.png';
    } else {
        leftHand.src = './imgs/scissorshand.png';
    }

    let star = document.createElement('img');
    star.src = './imgs/starsmall.png';

    let x = getComputerChoice();
    let y = input;
    let result = y+x;
    let winner = 'tie';
    selectors.textContent = `You chose ${y}, the computer chose ${x}`;
    if (result === 'rockscissors' || result === 'paperrock' || result === 'scissorspaper') {
        winner = 'You won!';
        playerWins++;
        player.appendChild(star);
        finalResult.textContent = winner;
    } else if (result === 'rockpaper' || result === 'paperscissors' || result === 'scissorsrock') {
        winner = 'You lost.';
        compWins++;
        comp.appendChild(star);
        finalResult.textContent = winner;
    } else {
        winner = 'A tie!';
        ties++;
        finalResult.textContent = winner;
    };

    if (playerWins == 5 || compWins == 5) {
        if (playerWins > compWins) {
            result = 'Congratulations! You won the game ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
            leftHand.src = './imgs/win.png';
            rightHand.src = './imgs/win.png';
            } else if (compWins > playerWins) {
            result = 'Commiserations. You lost the game ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
            leftHand.src = './imgs/loss.png';
            rightHand.src = './imgs/loss.png';
            }
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissors').disabled = true;
        playerWins = 0;
        compWins = 0;
        ties = 0;
        newGame.appendChild(newGameButton);
        return gameWinner.textContent = result;
    };
    return
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        gameWinner.textContent = '';
        playRound(button.id);
    });
});

newGameButton.addEventListener('click', () => {
    location.reload();
});