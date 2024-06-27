const prompt = require("prompt-sync")();

const idade = prompt("Qual sua idade? ");

const age = Number(idade);

console.log(typeof age);
