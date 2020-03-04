// Objeto é uma coleção Dinamica de pares chave/valor

const produto  = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']


console.log(produto)

console.log('========================================================')


const carro ={
    modelo: 'A4',
    valor:92000,
    proprietario:{
        nome:'juca',
        idade: 34,
        endereco :{
            logradouro: 'rua tal',
            numero: 775,
            bairro:'centro',
            cidade : 'Campinas'

        }
    },
    //array de objetos
    condutores: [{
        nome:'Zaqueu',
        idade:54
    },{
        nome:'Alessa',
        idade :23
    }],
        //funcao tambem
    calcularValorSeguro: function (){
        //...
    }
}

carro.proprietario.endereco.numero = 1070

carro['proprietario']['endereco']['logradouro'] = 'Av Papa Joao Paulo II'

console.log(carro)


delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)