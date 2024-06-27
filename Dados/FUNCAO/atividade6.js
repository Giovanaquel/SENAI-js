function numero(x, y) {
  min = Math.ceil(x);
  max = Math.floor(y);
  return Math.floor(Math.random() * (y - x) + x);
}
const retorno = numero((x = 0), (y = 50));
console.log(retorno);
