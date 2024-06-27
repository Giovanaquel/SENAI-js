const prompt = require("prompt-sync")();
const celsius = Number(prompt("Digite a temperatura em graus celsius: "));
const fahrenheit = celsius * 1.8 + 32;
console.log("sua temperatura em fahrenheit é: " + fahrenheit);
