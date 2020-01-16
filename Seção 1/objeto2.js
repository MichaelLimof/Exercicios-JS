
//a Instancia é criada a partir da palavra NEW

console.log(typeof Object)   //function

console.log(typeof new Object)  //Objeto


const cliente = function () { }

console.log(typeof cliente)     //function

console.log(typeof new cliente)  //Objeto


class Produto { } //ES2015 --> ES06  //function


console.log(typeof new Produto) //Objeto
