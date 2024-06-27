const prompt = require("prompt-sync")();

const i = 69;

while (true) {
  const n = Number(prompt("Acerte o número: "));
  if (n == i) {
    console.log("Parabéns, você acertou o número!");
    break;
  } else {
    if (n != i) {
      if (n > i) {
        console.log("O número é menor!");
      } else if (n < i) {
        console.log("O número é maior!");
      }
    }
  }
}
