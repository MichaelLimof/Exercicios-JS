const nomes  =['mary',  'tonho', 'calebe', 'turrão']

function exibeNomes(nome,indice){
    console.log(`${indice + 1} ${nome}`)

}

nomes.forEach(exibeNomes)

nomes.forEach(pessoa => console.log(pessoa))

