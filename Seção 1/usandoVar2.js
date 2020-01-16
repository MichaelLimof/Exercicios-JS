//Variaveis definidas como VAR tem escopo global e escopo de função
//Variaveis definidas como LET tem escopo global, escopo de função e escopo de bloco


var numero = 1
let num = 1

//nao existe escopo de bloco para uma variavel tipo VAR , exceto funcao
{
    var numero = 2
    let num = 3
    console.log("dentro numero =" + numero + " num =" + num)
}

console.log("fora numero =" + numero + " num =" + num)

// a Varivel LET só recebeu 3 dentro do  Bloco porque tem um escopo mais abrangente : fora 2 1
