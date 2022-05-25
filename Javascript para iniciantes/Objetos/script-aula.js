
//Objetos  

var pessoa = {
  nome: 'Antonio',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: false,
}
//pessoa.nome

//Métodos

var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
    },
  perimetro(lado) {
    return this.lados * lado;
  }
}
console.log(quadrado.area(15)); 
console.log(quadrado.perimetro(40));

//Organizar o código

//console.log(math.random);

//Criar um objeto
var carro = {};
var pessoa = {};

console.log(typeof carro);

//Dot notation get
var height = 200;
var menu = {
  width:800,
  height:50,
  backgroundcolor: '#84E',
  metadeheight() {
    return this.height / 2; // THIS É O OBJETO NO CASO MENU
  }
}
menu.backgroundcolor = '#000'
menu.color = 'blue';

menu.esconder = function() {
  console.log('escondi');
}
var bg = menu.backgroundcolor;


//menu.hasOwnProperty()  **que verifica se tenho a propriedade no objeto.


