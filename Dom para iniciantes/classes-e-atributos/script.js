// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector('.menu');
menu.className += ' ativo';
console.log(menu);
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.classList.remove('ativo');
// Verifique se as imagens possuem o atributo alt
const img = document.querySelector('img');
const altImg = img.getAttribute('alt');
console.log(altImg);


// Modifique o href do link externo no menu

