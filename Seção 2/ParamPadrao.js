function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}


console.log(soma1(1, 2, 3), soma1(2), soma1(2, 2), soma1(0, 0, 0)) //passando 0 vai dar erro)

console.log(soma1())

/********************************************** */
//estrategia 2,3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 //se a !== unidefined pega o valor de a ou 1
    b = 1 in arguments ? b : 1 //se b houver na posicao 1 algum numero(na 0 seria o indice A) nos argumentos pega o valor de b ou 1
    c = isNaN(c) ? 1 : c      //se c nao for um numero pega-se 1 ou c
    return a + b + c
}

console.log(soma2(1, 2, 3), soma2(2), soma2(2, 2), soma2(0, 0, 0))



//valor padrão do Es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(1, 2, 3), soma3(2), soma3(2, 2), soma3(0, 0, 0))