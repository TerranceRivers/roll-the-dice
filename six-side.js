const prompt = require
('prompt-sync')({sigint: true})

let diceRoll = Math.ceil(Math.random()*6)
console.log(diceRoll)