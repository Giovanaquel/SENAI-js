//  colchetes

const arr = [1, 2, 4, 5];

// index => posição de um elemento na lista
// colchetes e o index para encontrar um elemento
// primeiro indez => 0

//console.log(arr[2]);

// push => colocar elemento na lista
arr.push(10);

//console.log(arr);

// pop => remove o ultimo elemento
arr.pop();

//console.log(arr);

// método (ação)
//                 let x = 1 + 1 => retorno
//                                           entrada (1+1) => [processamento (devolve informação)] => saída (2)

//unshift => insere no início
arr.unshift(10);

//console.log(arr)

//shift => remove do início

//console.log(arr.shift())
// console.log(arr)

//splice
// (index, quantidade deletar, elementos que quer inserir)
arr.splice(3, 0, 7);
console.log(arr);
