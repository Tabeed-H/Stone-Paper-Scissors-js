let choices = ['Rock', 'Paper', 'Scissors']
let playerChoice;
let compChoices;
function compChoice(){
    compChoices = Math.floor((Math.random()*3) + 1);
}

function com(){
    if(compChoices === 1){
        document.getElementById("computer").innerHTML = ` ${choices[0]}`
        compChoices = 'rock';
        document.getElementById("compChoiceImg").src = "./Assests/rock.png"
    }else if(compChoices === 2){
        document.getElementById("computer").innerHTML = ` ${choices[1]}`
        compChoices = 'paper';
        document.getElementById("compChoiceImg").src = "./Assests/paper.png"
    }else{
        document.getElementById("computer").innerHTML = `${choices[2]}`
        compChoices  = 'scissor';
        document.getElementById("compChoiceImg").src = "./Assests/scissor.png"
    }
}



function rock(){
    playerChoice = 'rock';
    document.getElementById("player").innerHTML = `${choices[0]}`
    document.getElementById("playerChoiceImg").src = "./Assests/rock.png"
    check();
};
function paper(){
    playerChoice = 'paper';
    document.getElementById("player").innerHTML = ` ${choices[1]}`
    document.getElementById("playerChoiceImg").src = "./Assests/paper.png"
    check();
};

function scissor(){
    playerChoice = 'scissor';
    document.getElementById("player").innerHTML = `${choices[2]}`
    document.getElementById("playerChoiceImg").src = "./Assests/scissor.png"
    check();
};


function check(){
    if(playerChoice === 'rock'){
        if(compChoices === playerChoice){
            document.getElementById("final").innerHTML = 'Draw';
            compChoice();
        }else if(compChoices === 'paper'){
            document.getElementById("final").innerHTML = 'computer win';
            compChoice();
        }else{
            document.getElementById("final").innerHTML = 'Player win';
            compChoice();
        }
    }
    if(playerChoice === 'paper'){
        if(compChoices === playerChoice){
            document.getElementById("final").innerHTML = 'Draw';
            compChoice();
        }else if(compChoices === 'rock'){
            document.getElementById("final").innerHTML = 'player win';
            compChoice();
        }else{
            document.getElementById("final").innerHTML = 'computer win';
            compChoice();
        }
    }
    if(playerChoice === 'scissor'){
        if(compChoices === playerChoice){
            document.getElementById("final").innerHTML = 'Draw';
            compChoice();
        }else if(compChoices === 'rock'){
            document.getElementById("final").innerHTML = 'computer win';
            compChoice();
        }else{
            document.getElementById("final").innerHTML = 'player win';
            compChoice();
        }
    }
}