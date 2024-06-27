function numero(numero) {
  return Math.random() * numero;
}
const rato = numero(30);
console.log(rato);

// atividade 7

function soma(arr) {
  const result = arr.reduce(reduzir);
  arr.reduce(0);
}
function reduzir(acumulador, atual) {
  return (acumulador = atual);
}
console.log(soma([1, 2, 3, 4, 5]));

//////////////

function soma(arr) {
  return arr.reduce((soma, atual) => soma + atual, 0);
}
console.log(soma([1, 2, 3, 4, 5]));
