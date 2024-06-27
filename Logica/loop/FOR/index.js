// todas as espressôes
for (let i = 0; i < 10000; i++) {
  console.log(i);
}

// inicializador usando uma variavel já criada
let i = 0;
for (; i < 10; i++) {}

// condição
for (let i = 0; ; i++) {
  if (i > 10) {
    break;
  }
}

// sem a expressão final
for (let i = 0; i < 10; ) {
  i++;
}

//

for (let i = 0; i < 10; ) {
  if (i < 5) {
    i++;
  } else {
    i += 2;
  }
}
