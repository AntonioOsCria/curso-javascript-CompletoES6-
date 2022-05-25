console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser

const href = window.location.href;

console.log(href);
 
if(href === 'http://127.0.0.1:5500/o-que-%C3%A9-dom/') {
  console.log('è igual')
}


const h1Selecionar = document.querySelector('h1');

// windaw e document
//window.alert('Isso é um alerta');
//alert('Isso é um alerta'); // Funciona

document.querySelector('h1'); // Seleciona o primeiro h1, serve também para selecionar tags do html
document.body; // Retorna o body

const titulo = document.querySelector('h1');

titulo.innerText;

h1Selecionar.addEventListener('click', function(){
  console.log('clicou em ', h1Selecionar.innerText);
})
