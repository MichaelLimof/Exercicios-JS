function getPreco(imposto = 0, moeda ='R$'){
        
    return `${moeda} ${this.preco * (1 - this.desconto) * (1 + imposto)}`

}

const produto = {
    nome: 'notebook',
    preco: 2599.00,
    desconto: 0.15,
    getPreco
}


global.preco = 20
global.desconto = 0.1


console.log(getPreco())

console.log(produto.getPreco())

const carro ={

    preco:34000,
    desconto:0.10
}


//no call passaria os parametros {contexto e parametros esperador}
console.log(getPreco.call(carro, 0.17, 'R$'))

//console.log(getPreco.call(carro))

console.log(getPreco.apply(carro, [0.10, 'R$']))
console.log(getPreco.apply(global, [0.10, 'R$']))
//console.log(getPreco.apply(carro))