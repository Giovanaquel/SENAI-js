let espaços = 0;
const caminho = 10;
let i = 0;

while (true) {
  i++;
  const random = Math.random() * 20;
  const d20 = Math.ceil(random);

  if (d20 == 1) {
    espaços = espaços - 1;
  } else if (d20 == 20) {
    espaços = espaços + caminho;
  } else if (d20 >= 12) {
    espaços = espaços + 1;
  }

  if (espaços >= caminho) {
    console.log("Você chegou no caminho e utilizou:", i);
    break;
  }
}
