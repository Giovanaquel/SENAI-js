const prompt = require("prompt-sync")();

const salario = Number(prompt("Digite seu salario: "));
const imposto1 = salario * 0.075;
const imposto2 = salario * 0.15;
const imposto3 = salario * 0.225;
const imposto4 = salario * 0.275;

if (salario <= 2112.0) {
  console.log("Voce está isento");
} else if (salario >= 2112.01 && salario <= 2826.65) {
  console.log("Você deve pagar R$", imposto1);
} else if (salario >= 2826.66 && salario <= 3751.05) {
  console.log("Você deve pagar R$", imposto2);
} else if (salario >= 3751.06 && salario <= 4664.68) {
  console.log("Você deve pagar R$", imposto3);
} else if (salario > 4664.68) {
  console.log("Você deve pagar R$", imposto4);
}
