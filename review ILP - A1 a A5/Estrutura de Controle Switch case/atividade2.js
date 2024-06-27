const prompt = require("prompt-sync")();

const episodios = prompt("Digite um número de episodios: ");

switch (episodios) {
  case episodios >= 1 || episodios <= 10:
    console.log("série curta");
  case episodios >= 11 || episodios <= 100:
    console.log("série média");
}
