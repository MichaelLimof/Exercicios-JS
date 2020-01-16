let pessoa = {
    nome = "ana",
    falar:
        function () {

            return `Eu sou ${this.nome}`
        }
}

console.log(pessoa.falar)