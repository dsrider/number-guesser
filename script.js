let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
}


function compareGuesses(human, comp, secret){
    const human_diff = Math.abs(secret - human);
    const comp_diff = Math.abs(secret - comp);
    return human_diff <= comp_diff; //{
//         return true;
//     }
//     else {
//         false;
//     }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    }
    else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}