var possuiGraduacao = true;
var possuiDoutorado = false;  

if(possuiGraduacao) {
  console.log('Possui Graduação');
} else if(possuiDoutorado) {
  console.log('Possui Doutorado');
} else {
  console.log('Não possui nada');
}

var nome = 'Antonio' + 4;

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não Existe')
}

if(!!possuiGraduacao) {
  console.log('Possui Sim')
} else {
  console.log('Não possui');
}

var x = 10

console.log(x === 10);

if((5-5)&&(5+5)) {
  console.log('É verdadeiro')
} else {
  console.log('Falso')
}

if((5 - 10)&&(5 + 5)) {
  console.log('É verdadeiro')
} else {
  console.log('Falso')
}

var condicional = (5 - 10)&&(5 + 5);
if(condicional) {
  console.log('É verdadeiro', condicional)
} else {
  console.log('Falso')
}


var condicional2 = (5 - 5) || (10-5) || (20-10);
console.log(condicional2)

var corFavorita = 'preto';

switch (corFavorita) {
  case 'azul':
    console.log('Olhe para o ceu');
    break;
  case 'Amarelo':
    console.log('Sorria');
    break;
  default:
    console.log('Feche os olhos') 
}