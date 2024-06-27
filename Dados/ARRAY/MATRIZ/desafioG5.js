const numbers = [
  [10, 20, 30],
  [10, 20, 30],
];

const m = [];

for (let coluna = 0; coluna < numbers[0].length; coluna++) {
  let multi = 1;
  for (let linha = 0; linha < numbers.length; linha++) {
    multi = numbers[linha][coluna] * multi;
  }
  m.push(multi);
}
console.log(m);
