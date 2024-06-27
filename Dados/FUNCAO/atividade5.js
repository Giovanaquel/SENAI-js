function numeros(x, y) {
  if (x < y) {
    console.log("O menor é", x, "e o maior é", y);
  } else {
    console.log("O maior é ", x, "e o menor é", y);
  }
}
const n = numeros((x = 4), (y = 200));
