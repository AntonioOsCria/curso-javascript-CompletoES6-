var nome = 'Antonio';
var idade = 28;
console.log(idade);

var sobrenome = 'Carlos';
var nomeCompleto = nome + ' ' +  sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';

console.log(frase);
/*
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido
*/

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols / 2} gols`; 

// Utilizando Template String
console.log(frase2);

