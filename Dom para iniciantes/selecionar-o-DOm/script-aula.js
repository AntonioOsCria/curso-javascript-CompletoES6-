const animais = document.getElementById('animais')
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[2])

const primeiroLi = document.querySelector('li');

const linksInterno = document.querySelector('[href^="#"]');
console.log(linksInterno);


const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[3]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);


gridSectionNode.forEach(function(item, index){
console.log(item);

})