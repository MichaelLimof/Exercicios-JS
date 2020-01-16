
function compras(trabalho1, trabalho2) {

    const buySorvete = trabalho1 || trabalho2 //Or
    const buyTv = trabalho1 && trabalho2  //And
    //   const buyTv32    = !!(trabalho1 ^ trabalho2) //Or exclusive bitwise
    const buyTv32 = trabalho1 != trabalho2
    const manterSaudavel = !buySorvete

    return { buySorvete, buyTv, buyTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))