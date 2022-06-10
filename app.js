
const myArray = ['rock', 'paper', 'scissors']

computerPlay()

function computerPlay(){
    let index = Math.floor(Math.random()*3)
    console.log(index)
    console.log(myArray[index])
}

