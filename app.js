const startGameBtn =  document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSERS = "SCISSERS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WON";
const RESULT_COMPUTER_WON = "COMPUTER WON";

let gameIsRunning = false;

const start = function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    console.log(winner);
}

const getPlayerChoice = function(){
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSERS}`, "").toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSERS){
        alert("Invild choice, We chose Rock for you")
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function(){
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if(randomValue < 0.67 ){
        return PAPER;
    }else{
        return SCISSERS;
    }
}

const getWinner = function(cChoice,pChoice){
    if(cChoice === pChoice){
        return RESULT_DRAW;
    }else if(
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice == SCISSERS ||
        cChoice === SCISSERS && pChoice === ROCK   
        ){
        return RESULT_PLAYER_WIN;
    }else{
        return RESULT_COMPUTER_WON;
    }   
}

startGameBtn.addEventListener('click',  start);

