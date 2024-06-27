const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];
let diagonalA = [];
let diagonalB = [];

for (let linha = 0; linha < arr.length; linha++) {
  let coluna1 = linha;
  let coluna2 = arr.length - 1 - linha;
  diagonalA.push(arr[linha][coluna1]);

  diagonalB.push(arr[linha][coluna2]);
}
console.log(diagonalA);
console.log(diagonalB);
