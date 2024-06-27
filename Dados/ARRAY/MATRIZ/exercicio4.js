const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

let soma = 0;

for (let linha = 0; linha < numbers.length; linha++) {
  for (let coluna = 0; coluna < numbers[linha].length; coluna++) {
    soma = numbers[linha][coluna] + soma;
    console.log(soma);
  }
}
