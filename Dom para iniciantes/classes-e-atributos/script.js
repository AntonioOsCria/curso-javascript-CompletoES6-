const menu = document.querySelector('.menu');

menu.classList.add('ativo', 'teste');
menu.classList.remove('teste');
menu.classList.toggle('azul');
menu.classList.toggle('azul');
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) {
  menu.classList.add('possiu-azul');
} else {
  menu.classList.add('Não-possiu-azul');
}
menu.classList = 22
console.log(menu.className);