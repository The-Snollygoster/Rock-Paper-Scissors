function playRound() {
    function getComputerChoice() {
        function getRandomInt(max) {
            return Math.floor(Math.random()*max);
        }

        let randomInt = getRandomInt(3) 
                
        if (randomInt === 0) {
            computerChoice = 'rock';
        } else if (randomInt === 1) {
            computerChoice = 'paper';
        } else {
            computerChoice = 'scissors';
        }
        return computerChoice
    }
    let x = getComputerChoice();
    // function getPlayerChoice() {
    //     let input = prompt('Pick rock, paper or scissors.');
    //     input = input.toLowerCase()
    //     if (input === 'rock'||input === 'paper'||input === 'scissors') {
    //         playerChoice = input;
    //     } else {
    //         alert('You must pick rock, paper or scissors!')
    //         playerChoice = getPlayerChoice()
    //     }
    //     return playerChoice.toLowerCase();
    // }
    // let y = getPlayerChoice();

    let result = y+x;
    let winner = 'tie';
    const selectors = document.querySelector('#selectors');
    const finalResult = document.querySelector('#winner');
    selectors.textContent = `You chose ${y}, the computer chose ${x}`
    if (result === 'rockscissors' || result === 'paperrock' || result === 'scissorspaper') {
        winner = 'You won!';
    } else if (result === 'rockpaper' || result === 'paperscissors' || result === 'scissorsrock') {
        winner = 'You lost.';
    } else {
        winner = 'A tie!';
    }
    return finalResult.textContent = winner;
}

    const rock = document.querySelector('#rock');
    rock.addEventListener('click', () => {
        let y = 'rock'
        playRound()
    });

    const paper = document.querySelector('#paper');
    paper.addEventListener('click', () => {
        let y = 'paper'
        playRound()
    });

    const scissors = document.querySelector('#scissors');
    scissors.addEventListener('click', () => {
        let y = 'scissors'
        playRound()
    });

    // This function plays an entire game which consists of 5 rounds and tallies the results to return an overall winner I don't know loops yet so I'm just going to call it 5 times.
    // function playGame() {
    //     let playerWins = 0
    //     let compWins = 0
    //     let ties = 0
    //     // Game 1
    //     let winner = playRound()
    //     if (winner === 'You won!') {
    //         playerWins++
    //     } else if (winner === 'You lost.'){
    //         compWins++
    //     } else {
    //         ties++
    //     }
    //     // Game 2
    //     winner = playRound()
    //     if (winner === 'You won!') {
    //         playerWins++
    //     } else if (winner === 'You lost.'){
    //         compWins++
    //     } else {
    //         ties++
    //     }
    //     // Game 3
    //     winner = playRound()
    //     if (winner === 'You won!') {
    //         playerWins++
    //     } else if (winner === 'You lost.'){
    //         compWins++
    //     } else {
    //         ties++
    //     }
    //     // Game 4
    //     winner = playRound()
    //     if (winner === 'You won!') {
    //         playerWins++
    //     } else if (winner === 'You lost.'){
    //         compWins++
    //     } else {
    //         ties++
    //     }
    //     // Game 5
    //     winner = playRound()
    //     if (winner === 'You won!') {
    //         playerWins++
    //     } else if (winner === 'You lost.'){
    //         compWins++
    //     } else {
    //         ties++
    //     }
    //     // This compares the tallies to see who was the overall game winner and gives additional output such as the score and potential ties.
    //     let gameWinner = 'Unknown'        
    //     if (playerWins > compWins) {
    //         gameWinner = 'Congratulations! You won the game ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
    //     } else if (compWins > playerWins) {
    //         gameWinner = 'Commiserations. You lost the game ' + compWins + ' to ' + playerWins + ' with ' + ties + ' ties';
    //     } else {
    //         gameWinner = 'Wow, a tie! ' + playerWins + ' to ' + compWins + ' with ' + ties + ' ties';
    //     }
    //     return gameWinner
    // }