
const myArray = ['rock', 'paper', 'scissors']

let computerSelection = computerPlay()
let playerSelection = prompt('Enter your choice: ')

gameRound(computerSelection, playerSelection)

function computerPlay(){
    let index = Math.floor(Math.random()*3)
    console.log(index)
    return myArray[index]
}

function gameRound(computer, player){
    
    let result = document.querySelector('h3')
    
    if((player == 'rock' && computer == 'scissors') || (player == 'paper' && computer == 'rock') || (player == 'scissors' && computer == 'paper')){
        result.textContent += 'You win!'
        console.log('You win!')
    }
    else if(player === computer){
        result.textContent += 'Tie!'
        console.log("Tie!")
    }
    else{
        result.textContent += 'Computer wins!'
        console.log("Computer wins!")
    }
}

