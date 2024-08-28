let userScore = 0;
let compScor = 0;

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector

const getCompChoice = () => {
    let options = ['rock','paper','scissors']
    let randIdx = Math.floor(Math.random() * 3)
    return options[randIdx];
}

const drawGame = () => {
    console.log('Game is Draw')
}

const showWinner = (userWin) => {
    if (userWin){
        console.log('you win')
    }else{
        console.log('you lost')
    }
}

const playGame = (userChoice) => {
    console.log('userChoice',userChoice)
    const compChoice = getCompChoice();
    console.log('compChoice',compChoice);
    
if (userChoice === compChoice){
    drawGame();
} else {
    let userWin = true;
    if (userChoice === 'rock'){
        userWin = compChoice === 'paper' ? false : true
    }else if (userChoice === 'paper'){
        userWin = compChoice === 'scissors' ? false : true
    }else{
        userWin = compChoice === 'rock' ? false : true
    }
    showWinner(userWin);
}
}

choices.forEach((choice) => {
    choice.addEventListener('click', () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


