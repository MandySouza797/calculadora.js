const entrada = require("prompt-sync")();
const calculadora = require("./calculadora")

console.log("Hii escolha qual operação deseja fazer.")
console.log("1. Adição")
console.log("2. Subtração")
console.log("3. Multiplicaçao: ")
console.log("4 Divisão")
console.log("5. Porcentagem")
let resp = entrada("Digite aqui a opcção desejada.") 

if (resp == 1){
console.log("Vamos calcular!")
let n1 = +entrada("Digite o primeiro número a ser somado: ")
let n2 = +entrada("Digite o segundo número a ser somado: ")
let respSoma = calculadora.adicao(n1,n2)
console.log(respSoma);
}else if (resp == 2){
console.log("Vamos calcular!")
let n3 = +entrada("Digite o primeiro número a ser subtraido: ")
let n4 = +entrada("Digite o segundo número a ser subtraido: ")
let respSoma = calculadora.subtracao(n3,n4)
console.log(respSoma);
}else if (resp == 3){
console.log("Vamos calcular!")
let n5 = +entrada("Digite o primeiro número a ser multiplicado: ")
let n6 = +entrada("Digite o segundo número a ser multiplicado: ")
let respSoma = calculadora.multiplicacao(n5,n6)
console.log(respSoma);

} else if (resp == 4){
console.log("Vamos calcular!")
let n7 = +entrada("Digite o primeiro número a ser dividido: ")
let n8 = +entrada("Digite o segundo número a ser dividido: ")
let respSoma = calculadora.divisao(n7,n8)
console.log(respSoma);

}else if (resp == 5){
console.log("Vamos calcular!")
let n9 = +entrada("Digite quantos % quer saber do número: ")
let n10 = +entrada("Digite o segundo número para calcularmos a porcentagem: ")
let respSoma = calculadora.porcentagem(n9,n10)
console.log(respSoma);
}