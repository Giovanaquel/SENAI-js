const prompt = require("prompt-sync")();

let min;
let max;

for (let i = 0; i < 5; i++) {
  const x = Number(prompt("Digite um número: "));

  if (i == 0) {
    min = x;
    max = x;
  } else {
    if (x > max) {
      max = x;
    }

    if (x < min) {
      min = x;
    }
  }
}
console.log("maior número: ", max);
console.log("menor número: ", min);
