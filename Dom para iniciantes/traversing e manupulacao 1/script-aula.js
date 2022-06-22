const h1 = document.querySelector('h1');

const lista = document.querySelector('.animais-lista');

//console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa = document.querySelector('.mapa');

//contato.replacechild(lista, titulo);


//Novos elementos

const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo Titulo!';
novoh1.classList.add('titulo');

mapa.appendChild(novoh1);
console.log(novoh1);

//Clonar elementos 

const faq =  document.querySelector('.faq');

const cloneh1 = h1.cloneNode(true);


faq.appendChild(cloneh1);


