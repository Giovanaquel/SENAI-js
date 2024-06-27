const pessoa = {
  nome: "Gabs",
  idade: 26,
  profissao: "Professor",
  pais: "China",
};
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.profissao = "Vendedor da Shopee";
pessoa.email = "Paigabriel.gmail.com";
delete pessoa.pais;
console.log(pessoa);
