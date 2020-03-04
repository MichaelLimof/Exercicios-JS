//Se  utilizado no document(navegador), ao invocar a classe o this pode variar , oque tornara a variavel nome  = undefined, o que nao acontece com a Factory
//Ou seja , se utilizar o This, o contexto lexico tornara o escopo da variavel mais abrangente. O contrario do que acontece na Factory function onde o objeto assume a propria variavel
class Pessoa{

    constructor(nome){
        //com o THIS a Variavel passa a ser Publica
        this.nome = nome
    }

    falar(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

const pessoa1  = new Pessoa('Tuca')
pessoa1.falar()


//usando o Function Factory 
const pessoaFactory = nome =>{
    return{ 
        falar : ()  => {
            console.log(`O meu nome é ${nome}`)
        }
    }
}

const p2 = pessoaFactory('Zaqueu')
p2.falar()

 /*No navegador 
 
 class Pessoa{

    constructor(nome){
        //com o THIS a Variavel passa a ser Publica
        this.nome = nome
    }

    falar(){
        console.log(`O meu nome é ${this.nome}`)
    }
}

const pessoa1  = new Pessoa('Tuca')
pessoa1.falar()

O meu nome é Tuca

document.getElementsByTagName('body')[0].onclick = pessoa1.falar
ƒ falar(){
        console.log(`O meu nome é ${this.nome}`)
    }
O meu nome é undefined
*/
//============================================================
/*

const pessoaFactory = nome =>{
    return{ 
        falar : ()  => {
            console.log(`O meu nome é ${nome}`)
        }
    }
}

const p2 = pessoaFactory('Zaqueu')
p2.falar()
O meu nome é Zaqueu

document.getElementsByTagName('body')[0].onclick = p2.falar
()  => {
            console.log(`O meu nome é ${nome}`)
        }
O meu nome é Zaqueu
*/