// em js, tudo é obj

//function cumprimentar() {
//  console.log("Oi!");
//}
//cumprimentar();

////////////////////////////////

//const nome = "gabriel";

//function cumprimentar(nome) {
//  console.log("Oi, " + nome);
//}
//cumprimentar("Lara");

// parametros => criados para a execução da função

///////////////////////////////////////////

function maiusculo(str) {
  return str.toUpperCase();
}
const retorno = maiusculo("caramelo");
console.log(retorno);

///////////////////////////

function hello() {
  return "hello world";
}
console.log(hello());

// nomeaçao de um bloco de código que pode ser reutilizado
// responsabilidade única
// palavra chave => function nome_função () <= parametro {
// }
// chamar a função => nome_função() <= passar infomaçoes que vão ser convertidaas em parametros
// return => pode devolver informações

function nome(paramentro) {
  console.log(paramentro);
}
nome(2);
nome();

////////////////////////

function nome(paramentro) {
  console.log(paramentro);
  return "retornando info"; // => oque a função vai se tranfomar no final
}
const a = nome(2);
nome(nome(4));
console.log(a);

//////////////

function x() {
  return 10;
}
function y() {
  return 10;
}
const soma = x() + y();
console.log(soma);

///////////////////////

function oma(m, a) {
  return m + a;
}
console.log(oma(10, 20));

//const s = oma(10, 20);
//console.log(s);
