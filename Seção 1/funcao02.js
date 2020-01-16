//Uma funcao pode ser vazia, mas improvavel
//Uma funcao é um bloco de codigo nomeado, para ser reutilizada
//Uma funcao recebe parametros de entrada, os processa e retorna um valor
//Uma funcao pode nao receber nenhum parametro, como tambem nao retornar dados

//Armazenando funcao numa Variavel
const funcSoma = function (a, b = 0) {
    return a + b

}


console.log(funcSoma(2, 10))

//Armazenando funcao Arrow numa Variavel

const arrowMultiplica = (a, b) => {
    return a * b
}

console.log(arrowMultiplica(5, 4))


//retorno implicito

const divisao = (a, b) => a / b
console.log(divisao(10, 3).toFixed(2))


const imprime2 = a => console.log(a)

imprime2('daora!!')