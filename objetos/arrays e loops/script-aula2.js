/*EXEMPLO REAL
Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

 */

/*const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
   this.element().classList.add('ativo');
  
    }
}

Dom.seletor = 'ul';
Dom.ativar();



//Forma correta Constructor

/*CONSTRUCTOR FUNCTION REAL
Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.*/

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = Function() 
    this.element().classList.add('ativar');
  
}

const li = new Dom('li');
const ul = new Dom('ul');

const last = new Dom('li:last-child');  //para selecionar o ultimo item da li


