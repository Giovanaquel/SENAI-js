const prompt = require("prompt-sync")();

function soma (x, y) {
    return x + y
}

function sub (x, y) {
    return x -y
}
function mult (x, y) {
    return x * y
}
function div (x, y) {
    return x / y
}

while (true) {
    const x = Number(prompt("Digite um número: "))
    const y = Number(prompt("Digite outro número: "))
    const op = prompt("Qual operação deseja realizar? (soma/sub/mult/div")
    
    switch(op) {
        case "soma":
           resultado = soma(x, y)
        break
        case "sub":
            resultado = sub(x, y)
        break
        case "mult":
            resultado = mult(x, y)
        break
        case "div":
            resultado = div(x, y)
            break
            default:
            console.log("Opção inválida")
    
        }
    
    }

console.log("O resultado é:", resultado)





const esc = prompt(
        "Deseja realizar mais alguma operação? (Sim ou Não): "

        toLowerCase())
