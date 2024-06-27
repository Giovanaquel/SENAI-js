//const pessoa = {
//  nome: "Bernardo",
//  idade: 16,
//  definicao: "bonitão",
//};

//console.log(pessoa.nome);

////////////////////////////////////

// Obj.propriedade(chave)
// Obj [“propriedade”]

// Utiliza chaves { } como identificador
// Chave -> identificador

const pessoa = {
  nome: "Julia",
  idade: 16,
  definicao: "esperança",
};
// acessa notação de ponto
console.log(pessoa.nome);
// acessa notação de conchete
console.log(pessoa["idade"]);
// inserir
pessoa.origem = "barraginha";
// deletar
delete pessoa.origem;
// alterar
pessoa.nome = "July";

const dados = {
  id: 1,
  title: "Tartaruga Ninja",
};
console.log(dados[0]);
