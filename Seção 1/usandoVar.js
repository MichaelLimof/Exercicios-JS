//Escopo: Conceito de visibilidade de variavel, ouseja ate onde essa variavel é acessivel
//Variaveis definidas como VAR tem escopo global e escopo de função
//Variaveis definidas como LET tem escopo global, escopo de função e escopo de bloco

{ { { { var sera = "foi?!" } } } }

console.log(sera)


function teste() {
    var local = 123

}

teste()
