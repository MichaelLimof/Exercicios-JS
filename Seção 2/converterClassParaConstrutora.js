/*
Se houvesse a remocao do THIS o codigo iria funcionar porem a conseguiria acessar a variavel 


const p1 = new Pessoa('tonga')
p1.falar()
console.log(p1.nome) = undefined
 */

function Pessoa(nome){
this.nome = nome
    this.falar = function(){
       return console.log(`O meu nome é ${nome}`)
    }
}


const p1 = new Pessoa('tonga')
p1.falar()
console.log(p1.nome)

const p2 = new Pessoa('Tiano')
p2.falar()

const p3 = new Pessoa('Lepechucca')
p3.falar()