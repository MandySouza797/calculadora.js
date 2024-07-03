function adicao(a,b){
    let resultado = a+b ;
    if(resultado !==NaN){
    console.log("O resultado da soma é: ")
    return resultado
    }else {
    console.log("Digite um numero valido")
    }
    }
    function subtracao(c,d) {
    let resultado = c-d ;
    console.log("O resultado da subtração é: ")
    return resultado
    }
    function multiplicacao(e,f) {
    let resultado = e*f ;
    console.log("O resultado da multiplicação é: ")
    return resultado
    }
    function divisao(g,h) {
    let resultado = g/h ;
    console.log("O resultado da divisão é: ")
    return resultado
    }
    function porcentagem(i,j) {
    let resultado = (i/100)*j ;
    console.log("O resultado da porcentagem é: ")
    return resultado
    }
    
    module.exports = {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
    porcentagem
    }
    