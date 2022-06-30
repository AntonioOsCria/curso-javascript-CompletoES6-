/* OBJETOS
Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.*/
//carro, fiat e honda apontam para o mesmo objeto.
/*
const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;

honda.marca = 'honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'fiat';
fiat.preco = 3000;

console.log(honda);
*/

// MODO CORRETO DE CRIAR UMA FUNÇAO CONSTRUTORA.
/*CONSTRUCTOR FUNCTIONS
Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma. */
//Usar Pascal Case, ou seja, começar com letra maiúscula.

function Filho() {
  this.nome = 'nome';
  this.idade = 0;
}

const noah = new Filho();
noah.nome = 'noah';
noah.idade = 3;
const ben = new Filho();
ben.nome = 'Bernardo';
ben.idade = 6;

/* NEW KEYWORD
A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.
const honda = new Carro();

// 1 Cria um novo objeto
honda = {};

// 2 Define o protótipo
honda.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
this = honda;

// 4 Executa a função, substituindo this pelo objeto
honda.marca = 'Marca';
honda.preco = 0;

// 5 Retorna o novo objeto
return honda = {
  marca: 'Marca',
  preco: 0,
}
*/

/* PARÂMETROS E ARGUMENTOS
Podemos passar argumentos que serão utilizados no momento da criação do objeto.*/

function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida;
  this.preco = precoAtribuido;
}

const honda = new Carro('Honda', 3000);
const Fiat = new Carro('Fiat', 4000);

/*NEW KEYWORD
A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela. */
//FUNÇÃO CONSTRUTORA

function Maconha(marca, precoInicial) {
  this.taxa = 2.5;
  const precoFinal = precoInicial * this.taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);

}

const lemon = new Maconha('Lemom', 2000);