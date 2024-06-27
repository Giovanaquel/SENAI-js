const numbers = [
  [10, 20, 60],
  [8, 10, 52],
];

const m = [];

for (let linha = 0; linha < numbers.length; linha++) {
  let multi = 1;
  for (let coluna = 0; coluna < numbers[linha].length; coluna++) {
    multi = numbers[linha][coluna] * multi;
  }
  m.push(multi);
}
console.log(m);
