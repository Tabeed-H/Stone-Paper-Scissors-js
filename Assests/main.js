//defining the variables
let choices = ['Rock', 'Paper', 'Scissors']
let playerChoice;
let compchoice;

//DOM selectors
let computerHTML = document.getElementById("computer");
let playerHTML = document.getElementById("player");
let compSideImage = document.getElementById("compChoiceImg");
let playerSideImage = document.getElementById("playerChoiceImg");
let resultHTML = document.getElementById("final");

//BLOCK 01
//THIS BLOCK GENRATES COMPUTER CHOICE
//generates random numbers between 1 and 3
function compChoiceGenerater(){
    compGeneratedChoices = Math.floor((Math.random()*3) + 1);

    //after a random number is generated the number is then assigned to a choice from the array of CHOICES
    if(compGeneratedChoices === 1){
        computerHTML.innerHTML = ` ${choices[0]}`    //gets the choice from the array and changes the DOM
        compSideImage.src = "./Assests/rock.png" //changes the image according to the choice
        compchoice = 'rock';   //sets the value of computer choice
    }else if(compGeneratedChoices === 2){
        computerHTML.innerHTML = ` ${choices[1]}`   //gets the choice from the array and changes the DOM
        compSideImage.src = "./Assests/paper.png"   //changes the image according to the choice
        compchoice = 'paper';   //sets the value of computer choice
    }else{
        computerHTML.innerHTML = `${choices[2]}`    //gets the choice from the array and changes the DOM
        compSideImage.src = "./Assests/scissor.png" //changes the image according to the choice
        compchoice  = 'scissor';    //sets the value of computer choice
    }  
}

//BLOCK 02
//GENERATES THE USER'S CHOICE

//user choice 01 = rock
function rock(){
    playerChoice = 'rock';  //sets the player choice as ROCK 
    playerHTML.innerHTML = `${choices[0]}`  //changes the DOM
    playerSideImage.src = "./Assests/rock.png"  //changes the image according to the choice
    check();    //calls the check function to get the results
};
function paper(){
    playerChoice = 'paper'; //sets the player choice as PAPER
    playerHTML.innerHTML = ` ${choices[1]}` //changes the DOM
    playerSideImage.src = "./Assests/paper.png" //changes the image according to the choice
    check();    //calls the check function to get the results
};

function scissor(){
    playerChoice = 'scissor';   //sets the player choice as SCISSORS
    playerHTML.innerHTML = `${choices[2]}`  //changes the DOM
    playerSideImage.src = "./Assests/scissor.png"   //changes the image according to the choice
    check();    //calls the check function to get the results
};

//BLOCL 03
//GETS THE RESULTS
function check(){
    if(playerChoice === compchoice){
        resultHTML.innerHTML = "Draw";
    }else{
        if(playerChoice === 'rock'){
            if(compchoice === 'paper'){
                resultHTML.innerHTML = "Computer wins";
            }else{
                resultHTML.innerHTML = "Player Wins";
            }
        }
        if(playerChoice === 'paper'){
            if(compchoice === 'scissor'){
                resultHTML.innerHTML = "Computer wins";
            }else{
                resultHTML.innerHTML = "Player Wins";
            }
        }
        if(playerChoice === 'scissor'){
            if(compchoice === 'rock'){
                resultHTML.innerHTML = "Computer wins";
            }else{
                resultHTML.innerHTML = "Player Wins";
            }
        }
    }
   
}

