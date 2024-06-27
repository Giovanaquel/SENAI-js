const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 1500,
  cor: "Vinho",
};
console.log(carro.modelo);
console.log(carro.cor);
carro.cor = "Jacinto";
carro.condicao = "Usado pelo pai da Zabela";
delete carro.ano;
console.log(carro);
