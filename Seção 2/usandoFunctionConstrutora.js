//em JS uma classe nada mais é do que uma forma diferente de se escrever uma função .


function Carro(velMaxima = 200, delta = 5){

    //attr privado(de preferencia LET , exceto se for uma constante)
    let velAtual = 0


    //o  THIS é responsavel por tornar algo visivel pra fora desta função
    this.acelerar = function(){
        if(velAtual + delta <= velMaxima){
            velAtual += delta
        }else{
            velAtual = velMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velAtual

        //metodoprivado
        //const  getVelocidadeAtual = function(){
        //    return velAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.getVelocidadeAtual())
