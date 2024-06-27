const arr = [
  [12, -8, 15, 6],
  [1, 6, 20, -9],
  [0, -4, 0, -8],
  [-1, 6, 0, 15],
];

const diagonalA = [];

diagonalA.push(arr.at(-1).at(-1));
diagonalA.push(arr.at(-2).at(-2));
diagonalA.push(arr.at(-3).at(-3));
diagonalA.push(arr.at(-4).at(-4));

console.log(diagonalA);
