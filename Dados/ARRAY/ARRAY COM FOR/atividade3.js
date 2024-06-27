const arr = [2, 5, 7, 10, 16, 21, 24, 32, 64, 81];

let soma = 0;

for (let i = 0; i < arr.length; i++) {
  soma = soma + arr[i];
  // soma += arr[i]
}
console.log(arr);
console.log("A soma é:", soma);

// for (let num of arr)
// console.log(num)
