const startGameBtn =  document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSERS = "SCISSERS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WON";
const RESULT_COMPUTER_WON = "COMPUTER WON";

let gameIsRunning = false;


const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSERS}`, "").toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSERS){
        alert("Invild choice, We chose Rock for you")
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = () => {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if(randomValue < 0.67 ){
        return PAPER;
    }else{
        return SCISSERS;
    }
}

const getWinner = (cChoice,pChoice) =>
    cChoice === pChoice 
    ? RESULT_DRAW 
    : cChoice === ROCK && pChoice === PAPER || 
      cChoice === PAPER && pChoice == SCISSERS ||
      cChoice === SCISSERS && pChoice === ROCK 
    ? RESULT_PLAYER_WIN 
    : RESULT_COMPUTER_WON;


startGameBtn.addEventListener('click',  () => {
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    let msg;
    if(winner === RESULT_DRAW){
        msg = `you picked ${playerSelection} and computer picked ${computerChoice}, DRAW`
    }else if(winner === RESULT_PLAYER_WIN){
        msg = `you picked ${playerSelection} and computer picked ${computerChoice}, WON`
    }else{
        msg = `you picked ${playerSelection} and computer picked ${computerChoice}, LOST`
    }
    alert(msg);
    gameIsRunning = false;
});


    