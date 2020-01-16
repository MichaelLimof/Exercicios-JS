//Uma funcao pode ser vazia, mas improvavel
//Uma funcao é um bloco de codigo nomeado, para ser reutilizada
//Uma funcao recebe parametros de entrada, os processa e retorna um valor
//Uma funcao pode nao receber nenhum parametro, como tambem nao retornar dados

//sem retorno
function imprimirAlgo(a, b) {
    console.log(a + b)
}

imprimirAlgo(2, 3)


//Com retorno
function soma(a, b = 0) {

    return a + b
}

console.log(soma(3, 6))