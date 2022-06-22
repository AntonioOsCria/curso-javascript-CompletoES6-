const img = document.querySelector('img');
function callback(event) {
  console.log(event);
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
  console.log(event.path);
}
//animaisLista.addEventListener('click', callbackLista)

const linkExterno = document.querySelector('a[href^="http"]');
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this);
  console.log(this.getAttribute('class'));
}
linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
function hanleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul');
  } else if(event.key === 'f')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', hanleKeyboard);

const imgs = document.querySelectorAll('img');
function imgSrc(event) {
  const src = event.target;
  console.log(src)
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
})