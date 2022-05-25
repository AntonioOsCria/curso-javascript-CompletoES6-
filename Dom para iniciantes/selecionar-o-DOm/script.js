// Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const segundoH2 = document.querySelector( '.animais-descricao h2');
console.log(segundoH2);
// Selecione o último p do site
const paragrafo = document.querySelectorAll('p');

console.log(paragrafo[paragrafo.length - 1]);
