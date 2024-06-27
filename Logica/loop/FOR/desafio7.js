const prompt = require("prompt-sync")();

let x = 0;

const numero = Number(prompt("Bota um número maior que 0 ai: "));
for (let i = 1; i <= numero; i++) {
  console.log(" ".repeat(numero - x), "*".repeat(i + x));
  x++;
}

//    *
//   ***
//  *****
// *******
//*********
