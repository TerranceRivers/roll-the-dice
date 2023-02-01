const prompt = require
('prompt-sync')({sigint: true})

let customRoll = prompt("Enter number of side of dice: ")
let diceRoll = Math.ceil(Math.random() * customRoll)
console.log(diceRoll)