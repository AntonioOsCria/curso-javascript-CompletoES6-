const menu = document.querySelector('.menu');

menu.classList.add('ativo'); //para adicionar uma class
menu.classList.remove('ativo'); // para remover uma class
menu.classList.toggle('azul'); // se vc colocar uma vez só adiciona a class, se repetir ele tira a class
menu.classList.toggle('azul');
//menu.className = menu.className + ' Vermelho'
//menu.className += ' Vermelho' //simplificando 
//para renomear, ou adicionar outra class usando o exemplo acima 

/*if(menu.classList.contains('azul')) {
  menu.classList.add('Possui.azul');
} else {
  menu.classList.remove('azul');
}
*/
const animais = document.querySelector('.animais');
//console.log(animais.attributes);

const img = document.querySelector('img');
const srcImg = img.getAttribute('src'); //retorna todas as informaçoes do atributos 

img.setAttribute('alt', 'é uma raposa'); //define se não existir ou então ele atualiza

const possuiAlt = img.hasAttribute('src'); // serve para verificar se possui um attributo
console.log(possuiAlt);

