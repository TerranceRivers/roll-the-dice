const prompt = require
('prompt-sync')({sigint: true})

let riggedRoll = prompt("Enter Rigged Number: ")
let diceRoll = Math.ceil(Math.random() * 6)

let magicalNumber = 1
if(diceRoll === riggedRoll){
    console.log(diceRoll)
} else if (diceRoll % 2){
    console.log(riggedRoll)
} else 
    console.log(diceRoll)

