

function criarProduto(nome,preco, tipo, desconto){

    return {
        nome,
        preco,
        tipo,
        desconto: 0.1,
        total: preco -((preco / 100) * desconto)
    }
}


console.log(criarProduto('torrada',10,'alimento',0.1))
console.log(criarProduto('iMac',5899.00,'eletronico',0.5))