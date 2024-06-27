const prompt = require("prompt-sync")();
const arr = [];

for (let i = 1; i <= 5; i++) {
  const nome = prompt("Digite seu nome: ");
  const obj = {
    id: i,
    nome: nome,
  };
  arr.push(obj);
}
console.log(arr);
