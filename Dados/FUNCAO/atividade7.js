let soma = 0;

function array(arr = []) {
  for (let i = 0; i < arr.length; i++) {
    soma = soma + arr[i];
  }
}
const retorno = array((arr = [2, 4, 6, 8, 10]));
console.log(soma);

/////////////////////////////// atividade 7

function soma(arr) {
  const result = arr.reduce(reduzir);
  arr.reduce(0);
}
function reduzir(acumulador, atual) {
  return (acumulador = atual);
}
console.log(soma([1, 2, 3, 4, 5]));

//////////////////////////////////

function soma(arr) {
  return arr.reduce((soma, atual) => soma + atual, 0);
}
console.log(soma([1, 2, 3, 4, 5]));
