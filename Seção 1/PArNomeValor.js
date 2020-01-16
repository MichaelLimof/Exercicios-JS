//Par Nome valor


const saudacao = "ola" //contexto lexico 1


function exec() {

    const saudacao = "falaaaa"
    return saudacao
}

//Objetos são grupos alinhados de pares nome/valor


const cliente = {
    nome: "juca",
    idade: 23,
    peso: 90,
    endereco: {
        logradouro: "rua central",
        numero: 1112
    }
}


console.log(saudacao)
console.log(exec())
console.log(cliente)