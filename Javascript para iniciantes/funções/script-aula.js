function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));


function pi() {
  return 3.14;
}
var total = 5 * pi(); //15.7
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

function corFavorita(cor) {
  if(cor === 'Azul') {
    return 'olhe para o ceu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'E não gosto de cores';
  }
} 
//esse código mostra quando alguem clica em sua pagina.
addEventListener('click', function() { console.log('Foda') });


function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

imc2(50, 2.10)

function terceiraIdade(idade) {
  if(typeof idade !== 'Number') {
    return 'Informe a sua idade';
  } else if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60))

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} paises`;
}

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}
